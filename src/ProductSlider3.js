import React from "react";
import "./ProductSlider3.css";

const ProductCarousel2 = () => {
  const products = [
    {
      id: 1,

      image: "https://m.media-amazon.com/images/I/61kmAfCCJjL._AC_SY200_.jpg",
    },
    {
      id: 2,

      image: "https://m.media-amazon.com/images/I/61iVDci6V9L._AC_SY200_.jpg",
    },
    {
      id: 3,

      image: "https://m.media-amazon.com/images/I/518y1zTuTxL._AC_SY200_.jpg",
    },
    {
      id: 4,

      image: "https://m.media-amazon.com/images/I/816atz++wqL._AC_SY200_.jpg",
    },
    {
      id: 5,

      image: "https://m.media-amazon.com/images/I/81QiNyrMYEL._AC_SY200_.jpg",
    },
    {
      id: 6,

      image: "https://m.media-amazon.com/images/I/61QHbJch75L._AC_SY200_.jpg",
    },
    {
      id: 7,

      image: "https://m.media-amazon.com/images/I/81qv43XpBCL._AC_SY200_.jpg",
    },
    {
      id: 8,

      image: "https://m.media-amazon.com/images/I/717GPiLTPyL._AC_SY200_.jpg",
    },
    {
      id: 9,

      image: "https://m.media-amazon.com/images/I/31pBi+w0T-L._AC_SY200_.jpg",
    },
    {
      id: 10,

      image: "https://m.media-amazon.com/images/I/81ZgIAr8C6L._AC_SY200_.jpg",
    },
    {
      id: 11,

      image: "https://m.media-amazon.com/images/I/81ESVSN28ML._AC_SY200_.jpg",
    },
    {
      id: 12,

      image: "https://m.media-amazon.com/images/I/71+K5QXQaqL._AC_SY200_.jpg",
    },
    {
      id: 13,

      image: "https://m.media-amazon.com/images/I/61fB9ZnXHuL._AC_SY200_.jpg",
    },
    {
      id: 14,

      image: "https://m.media-amazon.com/images/I/31N27Oq6uOL._AC_SY200_.jpg",
    },
    {
      id: 15,

      image: "https://m.media-amazon.com/images/I/61rjjbufLXL._AC_SY200_.jpg",
    },
    {
      id: 16,

      image: "https://m.media-amazon.com/images/I/614bFftHAVL._AC_SY200_.jpg",
    },
    {
      id: 17,

      image: "https://m.media-amazon.com/images/I/615jDPv01BL._AC_SY200_.jpg",
    },
    {
      id: 18,

      image: "https://m.media-amazon.com/images/I/51AnZzTdggL._AC_SY200_.jpg",
    },
    {
      id: 19,

      image: "https://m.media-amazon.com/images/I/71WJd3yDX8L._AC_SY200_.jpg",
    },
    {
      id: 20,

      image: "https://m.media-amazon.com/images/I/71Tk3a-tCwL._AC_SY200_.jpg",
    },
    {
      id: 21,

      image: "https://m.media-amazon.com/images/I/71j2kenABdS._AC_SY200_.jpg",
    },
    {
      id: 22,

      image: "https://m.media-amazon.com/images/I/51eGavc+JpL._AC_SY200_.jpg",
    },
    {
      id: 23,

      image: "https://m.media-amazon.com/images/I/51PQmJEcdVL._AC_SY200_.jpg",
    },
    {
      id: 24,

      image: "https://m.media-amazon.com/images/I/618BWDlAqaL._AC_SY200_.jpg",
    },
    {
      id: 25,

      image: "https://m.media-amazon.com/images/I/319x+7hU1FL._AC_SY200_.jpg",
    },
    {
      id: 26,

      image: "https://m.media-amazon.com/images/I/61aTgYZHvgL._AC_SY200_.jpg",
    },
    {
      id: 27,

      image: "https://m.media-amazon.com/images/I/41WoWug7NWL._AC_SY200_.jpg",
    },
    {
      id: 28,

      image: "https://m.media-amazon.com/images/I/41y39AAZCFL._AC_SY200_.jpg",
    },
    {
      id: 29,

      image: "https://m.media-amazon.com/images/I/716AtVkw+sL._AC_SY200_.jpg",
    },
    {
      id: 30,

      image: "https://m.media-amazon.com/images/I/511XKdwBmsL._AC_SY200_.jpg",
    },
  ];

  const carouselRef = React.useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollLeft -= 300; // Adjust scroll amount as needed
  };

  const scrollRight = () => {
    carouselRef.current.scrollLeft += 300; // Adjust scroll amount as needed
  };

  return (
    <div className="carousel__container">
      <span className="product__header">
        <h2>Up to 50% off | Explore curated selection of new arrivals</h2><a href="hello.com" className="product__link">See All Offers</a>
      </span>
      <button className="scroll-button left" onClick={scrollLeft}>
        &lt;
      </button>
      <div className="product__carousel" ref={carouselRef}>
        {products.map((product) => (
          <div className="product__container" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product__image"
            />
            <div className="product-details"></div>
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
};

export default ProductCarousel2;
