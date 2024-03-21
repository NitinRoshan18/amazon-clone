import React from "react";
import "./Home.css";
import {
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
  Product6,
  Product7,
  Product8,
  Product9,
  Product10,
  Product11,
  Product12,
  Product13,
  Product14,
  Product15,
  Product16,
  Product17,
  Product18,
  Product19,
  Product20,
  Product,
} from "./Product";
import ImgSlider  from "./ImgSlider";
import Slider from "./ProductSlider";
import ProductCarousel from "./ProductSlider2";
import ProductCarousel2 from "./ProductSlider3";
import ProductCarousel4 from "./ProductSlider4";


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__image">
          <ImgSlider />
        </div>
        <div className="home__row">
          <Product1 />
          <Product2 />
          <Product3 />
          <Product4 />
        </div>
        <div className="home__row">
          <Product5 />
          <Product6 />
          <Product7 />
          <Product8 />
        </div>

        <div className="home__row">
          <Slider />
        </div>
        <div className="home__row">
          <ProductCarousel />
        </div>
        <div className="home__row">
          <ProductCarousel2 />
        </div>
        <div className="home__row">
          <Product9 />
          <Product10 />
          <Product11 />
          <Product12 />
        </div>

        <div className="home__row">
          <Product13 />
          <Product14 />
          <Product15 />
          <Product16 />
        </div>

        <div className="home__row">
          <Product17 />
          <Product18 />
          <Product19 />
          <Product20 />
        </div>
        <div className="home__row">
          <ProductCarousel4 />
        </div>

       


        <div className="home__row">
          <Product
            id="12345"
            title="iQOO 12 5G  (Legend, 12GB RAM, 256GB Storage)"
            description="| India's 1st Snapdragon® 8 Gen 3 Mobile Platform |"
            description2=" India's only Flagship with 50MP + 50MP + 64MP Camera"
            price={"54999"}
            image="https://m.media-amazon.com/images/I/411gvmvNQzL._AC_SY200_.jpg"
            rating={4}
          />
          <Product
            id="23456"
            title="iQOO Neo9 Pro 5G (Fiery Red, 8GB RAM, 256GB Storage) "
            description="| Snapdragon 8 Gen 2 Processor | Supercomputing Chip Q1 | "
            description2=" Flagship Level Sony IMX920 Camera"
            price={"37999"}
            image="https://m.media-amazon.com/images/I/41m-C1HHkIL._AC_SY200_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="34567"
            title="Amazon Echo (4th Gen)"
            description="Premium sound powered by Dolby and Alexa (Black)"
           
            price={"9999"}
            image="https://m.media-amazon.com/images/I/61dgl2srHDL.AC_SX250.jpg"
            rating={4}
          />
          <Product
            id="45678"
            title="Lenovo IdeaPad Gaming 3 Intel Core i5 11th Gen"
            description="15.6 (39.62cm) FHD IPS Gaming Laptop (8GB/512GB SSD/4GB) "
            description2="NVIDIA GTX 1650/120Hz/Win 11/Backlit/3months Game"
            price={"50799"}
            image="https://m.media-amazon.com/images/I/61WBYAPTV2L._AC_UL480_QL65_.jpg"
            rating={4}
          />
          <Product
            id="56789"
            title="Xiaomi 108 cm (43 inches) X Series 4K Ultra HD Smart Google TV "
            description="|L43M8-A2IN (Black) | "
           
            price={"25999"}
            image="https://m.media-amazon.com/images/I/71L+JnVXFTL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>

       

      </div>


      

    </div>
  );
}

export { Home };
