import { Layout,Typography} from 'antd';
import { 
    TwitterOutlined, 
    InstagramOutlined, 
    LinkedinOutlined 
     } from '@ant-design/icons';
   
import PartnerForm from '../../components/UIElements/Form/PartnerForm';
import FooterPage from '../../components/Footer/Footer';
const { Header,Content, Footer } = Layout;
const { Title } = Typography;
const PartnerPage = () => {
  return (
    <Layout>
    <Header className="relative">
        <div className="absolute text-center inset-0 bg-gray-50 font-bold">
        <Title level={2} className="text-white relative">PARTNER WITH US</Title>
        </div>
    </Header>
    <Layout className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <Content className="max-w-7xl mx-auto p-8 lg:p-16 flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12">
        {/* Left Side - Contact Information */}
        <div className="w-full md:w-1/2 space-y-8">
          <div className="text-orange-600 text-3xl font-bold">Make Partnership With Us</div>
          <div className="flex space-x-4">
            <a href="#" className="text-white">
              <TwitterOutlined className="text-2xl" />
            </a>
            <a href="#" className="text-white">
              <InstagramOutlined className="text-2xl" />
            </a>
            <a href="#" className="text-white">
              <LinkedinOutlined className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-6">
           <PartnerForm />
        </div>
      </Content>
    </Layout>
          <FooterPage/>
    </Layout>
  );
};
export default PartnerPage;