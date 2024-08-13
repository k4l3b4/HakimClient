import React from 'react';
import { Layout, Typography } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import ContactForm from '../../components/UIElements/Form/ContactForm';
import FooterPage from '../../components/Footer/Footer';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const Contacts = () => {
  return (
    <Layout>
      <Header className="relative">

        <div className="absolute inset-0 bg-gray-50 font-bold text-center pl-32">
          <Title level={2} className="text-white text-3xl relative text-start">Contact Us</Title>
        </div>
      </Header>
      <Layout className="bg-gray-900 text-white">
        <Content className="max-w-7xl mx-auto lg:p-8 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-4/5">
            <div className="text-orange-600 font-bold"><h1>Contact us</h1></div> <br/><br/><br/>
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-12">
              <div className="flex flex-col items-center">
                <div className="bg-orange-600 rounded-full p-4 mb-4">
                  <PhoneOutlined className="text-white text-3xl" />
                </div>
                <p className="text-gray-400">+251974255555</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-orange-600 rounded-full p-4 mb-4">
                  <MailOutlined className="text-white text-3xl" />
                </div>
                <p className="text-gray-400">info@kassmaSolution.et</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-orange-600 rounded-full p-4 mb-4">
                  <EnvironmentOutlined className="text-white text-3xl" />
                </div>
                <p className="text-gray-400">Addis Abeba, Ethiopia</p>
              </div>
            </div>
            <div className="text-4xl font-bold text-white">Get in touch with us</div><br/>
            <div className="flex space-x-4">
              <a href="#" className="text-white" aria-label="Twitter">
                <TwitterOutlined className="text-2xl" />
              </a>
              <a href="#" className="text-white" aria-label="Instagram">
                <InstagramOutlined className="text-2xl" />
              </a>
              <a href="#" className="text-white" aria-label="LinkedIn">
                <LinkedinOutlined className="text-2xl" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <ContactForm />
          </div>
        </Content>
      </Layout>
      <FooterPage />
    </Layout>
  );
};

export default Contacts;
