import React from 'react';
import { Card, Timeline } from 'antd';
import FooterPage from '../../components/Footer/Footer';

const historyData = [
  {
    period: "Pre 1800",
    description: "The history of Ethiopian medicine prior to 1800 is a fascinating blend of indigenous knowledge, religious influences, and interactions with neighboring civilizations. Here are some key aspects: ...",
  },
  {
    period: "1800-1900",
    description: "In the 19th century, Ethiopian medical history saw significant interactions with European medicine, particularly through travelers, missionaries, and military personnel. ...",
  },
  {
    period: "1900-1950",
    description: "Between 1900 and 1950, Ethiopian medical history experienced significant transformations influenced by both internal developments and external interactions. ...",
  },
  {
    period: "1950-2000",
    description: "From 1950 to 2000, Ethiopian medical history saw numerous advancements and changes driven by internal reforms and international collaborations. ...",
  },
  {
    period: "2000-Present",
    description: "The period from 2000 onwards in Ethiopian medical history has been marked by significant progress alongside persistent challenges. ...",
  },
];

const HistoryPage = () => {
  return (
    <>
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">History of Ethiopian Medicine</h1>
      <Timeline mode="alternate">
        {historyData.map((item, index) => (
          <Timeline.Item key={index} className="p-4">
            <Card title={item.period} bordered={false}>
              <p>{item.description}</p>
            </Card>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
    <FooterPage/>
    </>
  );
};

export default HistoryPage;
