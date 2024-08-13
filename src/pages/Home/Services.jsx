import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card } from 'antd';
import { MedicineBoxOutlined, HeartOutlined, FileTextOutlined, ProfileOutlined, GlobalOutlined, TeamOutlined } from '@ant-design/icons';
import { photo1 } from '../../assets/images';

const servicesLeft = [
  { icon: <MedicineBoxOutlined style={{ marginLeft: 50 }} />, title: 'Surgical Services'},
  { icon: <ProfileOutlined />, title: 'Dental Clinics' },
  { icon: <GlobalOutlined />, title: 'Medical Services' },
];

const servicesRight = [
  { icon: <HeartOutlined />, title: 'MCH Centers' },
  { icon: <FileTextOutlined />, title: 'Pharmaceutical Agencies' },
  { icon: <TeamOutlined />, title: 'Patient Leaflets' },
];

const HealthcareServices = () => {
  const navigate = useNavigate();

  const handleCardClick = (title) => {
    navigate(`/category/${title}`);
  };

  return (
    <div className="flex flex-col items-center bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-between w-full max-w-6xl">
        <div className="w-full lg:w-1/3 flex flex-col space-y-4 mb-4 lg:mb-0">
          {servicesLeft.map((service, index) => (
            <Card
              key={index}
              className="w-full flex items-center justify-center p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleCardClick(service.title)}
            >
              <div className="text-center">
                <div className="text-4xl text-blue-500 mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold">{service.title}</h3>
              </div>
            </Card>
          ))}
        </div>
        <div className="w-full lg:w-1/3 flex justify-center items-center mb-4 lg:mb-0">
          <img src={photo1} alt="Doctor" className="w-full h-auto" />
        </div>
        <div className="w-full lg:w-1/3 flex flex-col space-y-4">
          {servicesRight.map((service, index) => (
            <Card
              key={index}
              className="w-full flex items-center justify-center p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleCardClick(service.title)}
            >
              <div className="text-center">
                <div className="text-4xl text-blue-500 mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold">{service.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthcareServices;
