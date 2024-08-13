import React from 'react';
import { Space, Button, Row, Col, Image, Tooltip } from 'antd';
import { SendOutlined, YoutubeOutlined, LinkedinOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';

const FooterPage = () => {
  const socialLinks = [
    { icon: <SendOutlined />, link: 'https://t.me/HakimEthio' },
    { icon: <YoutubeOutlined />, link: 'https://youtube.com/@hakim207?si=qOLz_0YtFnFx62Aa' },
    { icon: <LinkedinOutlined />, link: 'https://www.linkedin.com/groups/9536029' },
  ];

  return (
    <footer className="bg-black text-white py-6">
      <Row className="container mx-auto">
        <Col xs={24} sm={12} md={6} className="flex flex-col pl-4 sm:pl-8 md:pl-16 space-y-3">
          <a href="#" className="flex items-center">
            <span>Explore our social media</span>
          </a>
          <span>for exclusive content</span>
          <span>and community highlights</span>
          <span>Connect below!</span>
          <Row gutter={8} className="mt-4">
            {socialLinks.map((link) => (
              <Col key={link.link} span={8} xs={6} sm={4} className="flex justify-center">
                <Tooltip title={link.link.slice(22)}> {/* Extract platform name from URL */}
                  <a href={link.link} target="_blank" rel="noreferrer" className="text-lg hover:text-blue-500">
                    {link.icon}
                  </a>
                </Tooltip>
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={24} sm={12} md={6} className="flex flex-col pl-4 sm:pl-8 md:pl-16 space-y-3">
          <span className="text-base font-bold">Explore</span>
          <a href="#">Contact Us</a>
          <a href="#">HakimPodcast</a>
          <a href="#">Articles</a>
          <a href="#">Blog</a>
        </Col>
        <Col xs={24} sm={12} md={6} className="flex flex-col pl-4 sm:pl-8 md:pl-12 space-y-3">
          <span className="text-base font-bold">Address</span>
          <a href="#">Addis Ababa, Ethiopia</a>
        </Col>
        <Col xs={24} sm={12} md={6} className="flex flex-col pl-4 sm:pl-8 md:pl-12 space-y-3">
          <span className="text-base font-bold">Contact</span>
          <a href="#">Hakim Podcast</a>
          <a href="#"><PhoneOutlined /></a>
          <a href="#"><MailOutlined /></a>
        </Col>
      </Row>
      <div className="flex flex-col items-center py-4">
        <div className="w-full h-px bg-gray-700"></div>
        <p className="text-white mt-4">
          © {new Date().getFullYear()} | Hakim Podcast
        </p>
        <p>Developed ♥ By KassMa Tech Solution Company</p>
      </div>
    </footer>
  );
};

export default FooterPage;
