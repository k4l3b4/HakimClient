import React from "react";
import Hero from "../assets/images/Hero.jpg";
import Banner from "./PodCast/Banner";
import Podcast from "./PodCast/Podcast";
import Footer from "../components/Footer/Footer";

const HakimPodcast = () => {
  
  return (
    <div className="w-full h-screen relative">
      <Banner /> {/* Render the Latest component */}
      <br/>
      <Podcast />
      <Footer/>
    </div>
  );
};

export default HakimPodcast;