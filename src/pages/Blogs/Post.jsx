import React from 'react';
import { Layout, Typography, Space, Image } from 'antd';
import { ClockCircleOutlined, UserOutlined, EyeOutlined } from '@ant-design/icons';
import photo1 from '../../assets/images/photo1.jpg';
import photo2 from '../../assets/images/photo2.jpg';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const jobData = [
  {
    id: 1,
    title: 'Software Engineer',
    date: 'Jul 19, 2024',
    author: 'John Doe',
    views: 250,
    imageSrc: photo1,
    excerpt: 'We are looking for a Software Engineer with 3+ years of experience in full-stack development...',
  },
  {
    id: 2,
    title: 'Product Manager',
    date: 'Jul 18, 2024',
    author: 'Jane Smith',
    views: 190,
    imageSrc: photo2,
    excerpt: 'Join our team as a Product Manager to drive product vision and strategy...',
  },
  {
    id: 3,
    title: 'Software Engineer',
    date: 'Jul 19, 2024',
    author: 'John Doe',
    views: 250,
    imageSrc: photo1,
    excerpt: 'We are looking for a Software Engineer with 3+ years of experience in full-stack development...',
  },
  {
    id: 4,
    title: 'Product Manager',
    date: 'Jul 18, 2024',
    author: 'Jane Smith',
    views: 190,
    imageSrc: photo2,
    excerpt: 'Join our team as a Product Manager to drive product vision and strategy...',
  },
];

const BlogPost = () => {
  return (
    <Layout className="min-h-screen bg-gray-50 p-4 md:p-8">
      <Content className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobData.map((job) => (
          <div key={job.id} className="bg-white rounded-md shadow-lg p-4">
            <Image
              src={job.imageSrc}
              alt={job.title}
              className="rounded-t-md"
              style={{ width: '315px', height: '315px', objectFit: 'cover' }}
            />
            <Title level={3} className="text-black font-bold mb-2">
              {job.title}
            </Title>
            <Space className="mb-4 flex-wrap">
              <Text className="text-black flex items-center">
                <ClockCircleOutlined className="mr-1" /> {job.date}
              </Text>
              <Text className="text-black flex items-center">
                <UserOutlined className="mr-1" /> Posted by: {job.author}
              </Text>
              <Text className="text-black flex items-center">
                <EyeOutlined className="mr-1" /> {job.views} views
              </Text>
            </Space>
            <Paragraph className="text-black mb-4">
              {job.excerpt}
              <a href="#" className="text-blue-400 hover:text-blue-600"> Read More</a>
            </Paragraph>
          </div>
        ))}
      </Content>
    </Layout>
  );
};

export default BlogPost;
