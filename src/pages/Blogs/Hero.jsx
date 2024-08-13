import React from 'react';
import { Layout, Button, Typography, Image } from 'antd';
import { FolderOutlined, AudioOutlined } from '@ant-design/icons';
import { Podcast } from '../../assets/images';
import BlogsList from './BlogsList';

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

const HeroPage = () => {
  return (
    <Layout className="min-h-screen bg-gray-50">
      <div className="w-full h-[300px]">
        <Image
          src={Podcast}
          preview={false}
          className="w-full h-full object-cover"
        />
      </div>
      <Header className="bg-transparent">
        <Title level={2} className="text-white p-4">
          BLOGS
        </Title>
      </Header>
      <Content className="p-8 bg-gray-50">
        <Title level={2} className="text-black">Blogs</Title>
        <div className="border-b-2 border-red-500 mb-4"></div>
        <Paragraph className="text-black">
          In this part of our page, we're cheering for the upcoming business innovators who would shape the future of Ethiopia. From coming up with ideas to facing different challenges and making it happen, our blog is like a door to the stories of Tomorrow's Leaders, Yenege Meriwoch.
        </Paragraph>


        <Title level={3} className="text-black mt-8">Categories</Title>
        <div className="mb-4 space-y-2">
        <div className="mt-8">
          <BlogsList />
        </div>
          <Button type="default" className="w-full flex items-center justify-start">
            <FolderOutlined className="mr-2" />
            Business
          </Button>
          <Button type="default" className="w-full flex items-center justify-start">
            <AudioOutlined className="mr-2" />
            Podcast
          </Button>
        </div>
        <hr className="my-4" />

        <Title level={3} className="text-black">Tags</Title>
        <div className="flex flex-wrap gap-2">
          <Button type="default">Business</Button>
          <Button type="default">Podcast</Button>
        </div>
      </Content>
    </Layout>
  );
};

export default HeroPage;
