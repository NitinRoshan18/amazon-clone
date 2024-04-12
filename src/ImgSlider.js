import React, { useState } from "react";
import './ImgSlider.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="image-carousel">
      <button onClick={handlePrevClick} className="prev-button">
        &lt;
      </button>
      <img src={images[currentIndex]} alt="" className="image" />
      <button onClick={handleNextClick} className="next-button">
        &gt;
      </button>
    </div>
  );
};

const images = [

  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg"
  ,
  
  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/ATFGW/BAU_GW_Bedsheets_PC_12th._CB580694896_.jpg"
  ,
  
  
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg"
  ,
  
  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Unrec/TallHero_3000X1200_Unrec._CB593464763_.jpg"
  ,
  
    
  "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg"
  ,
  
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/GATEWAY/SPC/VPC/Feb/SPC-VPC-PC-2x._CB581411722_.jpg"
  ,
  "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/GW/Mar18/QC/PC_GW_Hero_3000x1200_01._CB579486410_.jpg"
  ,
  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/3000X1200_New_Launch_March_hero1._CB580055456_.jpg"
  ,
  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/ATFGW/GW_Storage-box_3000x1200_PC._CB561623684_.jpg"
  ,
  

];

function ImgSlider() {
  return (
    <div className="imgSlider">
      <ImageCarousel images={images} />
    </div>
  );
}

export default ImgSlider;