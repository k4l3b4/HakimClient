import React from "react";
import { Button, Image } from 'antd';
import { Hero, photo7 } from "../assets/images";
import LatestEpisodes from "./Home/Latest";
import { RightOutlined } from '@ant-design/icons'; // Import the icon
import FooterPage from "../components/Footer/Footer";
import HealthcareServices from "./Home/Services";
import EpisodesGrid from "./Home/Event"
import SubscriptionForm from "./Home/Subscription";
const Home = () => {

  return (
    <div className="w-full h-screen relative bg-gray-50">
      <div className="relative w-full h-[400px] md:h-[600px] lg:h-[800px]">
        <div className="absolute inset-0 rounded-b-lg overflow-hidden w-full h-full">
          <Image
            src={photo7}
            alt="Medical services background"
            width="100%"
            preview={false}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-start h-full p-6 md:p-12 lg:p-24 text-white">
          <div className="text-left lg:pt-32 sm:pt-20 pt-12">
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Medical services <br /> that you can trust.
            </h1>
            <Button
              type="primary"
              className="mt-4"
              size="large"
              icon={<RightOutlined />}
            >
              Discover More
            </Button>
          </div>
        </div>
      </div>
      <EpisodesGrid />
      <LatestEpisodes />
      <HealthcareServices />
      <SubscriptionForm />
      <br />
      <div>
        <FooterPage />
      </div>
    </div>
  );
};

export default Home;