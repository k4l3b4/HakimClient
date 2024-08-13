import React from 'react';
import { Typography, List } from 'antd';

const { Title } = Typography;

const recentBlogs = [
  'Pioneering the Ethiopian Private Medical Emergency Services, The Story of Kibret Abebe',
  'The Entrepreneurial Journey That Led...',
  'Meri Summit on Building High-Performing...',
  'Turning Eventing Passion into Profit...',
  'Becoming an Accidental Entrepreneur Meried...',
  'Navigate the Newly Emerging Ethiopian...',
  'Becoming a Global Chef Celebrity...',
  'Turning Plastic Waste into Affordable...',
  'Becoming a Creative Master The...'
];

const RecentBlogs = () => {
  return (
    <div>
      <Title level={4} className="text-black">Recent Blogs</Title>
      <List
        dataSource={recentBlogs}
        renderItem={item => (
          <List.Item>
            <a href="#" className="text-black">{item}</a>
          </List.Item>
        )}
      />
    </div>
  );
};

export default RecentBlogs;
