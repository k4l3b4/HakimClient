import React, { useState, useEffect } from 'react';
import { ClockCircleOutlined, UserOutlined, FolderOpenOutlined, CommentOutlined } from '@ant-design/icons';
import { Typography, Space, Layout } from 'antd';
import FooterPage from '../../components/Footer/Footer';
import { GetScholars } from '../../api/scholars'; // Adjust the import path as needed

const { Title, Paragraph, Text } = Typography;
const { Header } = Layout;

const ScholarshipPost = ({ scholarship }) => (
  <div className="bg-gray-800 p-6 rounded-md shadow-lg">
    <img
      src={scholarship.image}
      alt={scholarship.title}
      className="w-full h-auto rounded-md mb-4"
    />
    <Title level={3}>
      <strong className="text-white mb-2">{scholarship.title}</strong>
    </Title>
    <Space className="mb-4 flex-wrap">
      <Text className="text-white flex items-center">
        <UserOutlined className="mr-1" /> {scholarship.author}
      </Text>
      <Text className="text-white flex items-center">
        <ClockCircleOutlined className="mr-1" /> {scholarship.date}
      </Text>
      <Text className="text-white flex items-center">
        <FolderOpenOutlined className="mr-1" /> {scholarship.category}
      </Text>
      <Text className="text-white flex items-center">
        <CommentOutlined className="mr-1" /> {scholarship.comments}
      </Text>
    </Space>
    <Paragraph className="text-gray-300 mb-4">
      {scholarship.title}... 
      <a href={scholarship.link} className="text-blue-400 hover:text-blue-600"> Continue Reading</a>
    </Paragraph>
  </div>
);

const ScholarshipGallery = () => {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScholars = async () => {
      try {
        const data = await GetScholars();
        setScholarships(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchScholars();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Header className="relative h-64 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}>
        <div className="absolute inset-0 bg-orange-500 opacity-75"></div>
        <Title level={2} className="text-white relative">Scholarship</Title>
      </Header>
      <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8 lg:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {scholarships.map((scholarship) => (
            <ScholarshipPost key={scholarship.id} scholarship={scholarship} />
          ))}
        </div>
      </div>
      <FooterPage />
    </div>
  );
};

export default ScholarshipGallery;
