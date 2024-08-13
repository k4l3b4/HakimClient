import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Spin, Alert } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { GetLatest } from '../../api/latest';

const LatestEpisodes = () => {
  const [episodesStack, setEpisodesStack] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchEpisodes = async () => {
      setLoading(true);
      try {
        const data = await GetLatest();
        if (data.error) {
          setError(data.error);
        } else {
          setEpisodesStack([...data].reverse()); // Reverse to simulate LIFO order
        }
      } catch (err) {
        setError("An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchEpisodes();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const carouselContent = () => {
    const pageSize = 3;
    const startIndex = currentPage * pageSize;
    const endIndex = startIndex + pageSize;
    return episodesStack.slice(startIndex, endIndex);
  };

  if (loading) return <Spin tip="Loading episodes..." />;
  if (error) return <Alert message="Error" description={error} type="error" />;

  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Latest Episodes</h2>
        <Row gutter={[16, 16]}>
          {carouselContent().map((episode, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={8}>
              <Card
                cover={<img alt={episode.title} src={episode.image} />}
                className="shadow-lg flex flex-col justify-between"
                style={{ height: '100%' }}
              >
                <div className="flex-grow">
                  <h3 className="text-lg font-medium mb-2">{episode.title}</h3>
                  <p className="text-gray-600 mb-4">{episode.guest}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs flex items-center">
                    <AudioOutlined className="mr-2" /> {episode.category}
                  </span>
                  <a
                    href="#"
                    className="text-orange-500 hover:text-orange-700 font-medium"
                  >
                    View Episode
                  </a>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default LatestEpisodes;
