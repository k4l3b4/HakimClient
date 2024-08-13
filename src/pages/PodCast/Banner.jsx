import React from 'react';
import { Image } from 'antd';
import {Podcast} from '../../assets/images';

const Banner = () => {
  return (
    <div className="relative">
      <div className='object-cover'>
          <Image
          src={Podcast} // Replace with your image URL
          preview={false}
          width="100%" 
          height={300}
          />
      </div>
       <div className="absolute inset-0  flex">
        <h1 className="text-orange-400 font-bold p-20">Kakim PODCAST</h1>
      </div>
    </div>
  );
};

export default Banner;
