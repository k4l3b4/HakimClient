import React, { useState, useEffect } from 'react';
import { Card, Tag } from 'antd';
import { GetPodcasts } from '../../api/podcast'; // Adjust the import path as needed

const { Meta } = Card;

const Podcast = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPodcasts = async (values) => {
      try {
        const data = await GetPodcasts(values);
        if (data) {
          setPodcasts(data.reverse());
        } else {
          throw new Error('No data returned');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {podcasts.map((podcast) => (
          <Card
            key={podcast.id}
            cover={
              <iframe
                src={podcast.videoSrc}
                title={`Podcast Episode ${podcast.episode}`}
                className="w-full h-56"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            }
            className="bg-gray-800 text-white"
          >
            <Meta
              title={
                <div className="flex items-center mb-2 text-white">
                  <Tag color="blue" className="mr-2">{podcast.category}</Tag>
                  <span>Episode {podcast.episode}</span>
                </div>
              }
              description={<span>{podcast.title}</span>}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Podcast;
