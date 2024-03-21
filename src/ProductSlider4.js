import React from "react";
import "./ProductSlider2.css";

const ProductCarousel4 = () => {
  const products = [
    {
      id: 1,

      image: "https://m.media-amazon.com/images/I/51x3cj+-iUL._AC_SY200_.jpg",
    },
    {
      id: 2,

      image: "https://m.media-amazon.com/images/I/71t9JRry+3L._AC_SY200_.jpg",
    },
    {
      id: 3,

      image: "https://m.media-amazon.com/images/I/61qZXVuSB9L._AC_SY200_.jpg",
    },
    {
      id: 4,

      image: "https://m.media-amazon.com/images/I/51lV2Pem64L._AC_SY200_.jpg",
    },
    {
      id: 5,

      image: "https://m.media-amazon.com/images/I/61J2gr1xbLL._AC_SY200_.jpg",
    },
    {
      id: 6,

      image: "https://m.media-amazon.com/images/I/6170LnM3OtL._AC_SY200_.jpg",
    },
    {
      id: 7,

      image: "https://m.media-amazon.com/images/I/51FRsJvhucL._AC_SY200_.jpg",
    },
    {
      id: 8,

      image: "https://m.media-amazon.com/images/I/51pWgQwbKPL._AC_SY200_.jpg",
    },
    {
      id: 9,

      image: "https://m.media-amazon.com/images/I/61wHkCENFtL._AC_SY200_.jpg",
    },
    {
      id: 10,

      image: "https://m.media-amazon.com/images/I/51eWbvvpYHL._AC_SY200_.jpg",
    },
    {
      id: 11,

      image: "https://m.media-amazon.com/images/I/71rJ1ha9+0L._AC_SY200_.jpg",
    },
    {
      id: 12,

      image: "https://m.media-amazon.com/images/I/51cfrv-GX5L._AC_SY200_.jpg",
    },
    {
      id: 13,

      image: "https://m.media-amazon.com/images/I/61NbZFMc7TL._AC_SY200_.jpg",
    },
    {
      id: 14,

      image: "https://m.media-amazon.com/images/I/41FzawjykfL._AC_SY200_.jpg",
    },
    {
      id: 15,

      image: "https://m.media-amazon.com/images/I/41tZ4-oHf7L._AC_SY200_.jpg",
    },
    {
      id: 16,

      image: "https://m.media-amazon.com/images/I/51qpGr-1qzL._AC_SY200_.jpg",
    },
    {
      id: 17,

      image: "https://m.media-amazon.com/images/I/610+kxvRdEL._AC_SY200_.jpg",
    },
    {
      id: 18,

      image: "https://m.media-amazon.com/images/I/51tXjE2WQQL._AC_SY200_.jpg",
    },
    {
      id: 19,

      image: "https://m.media-amazon.com/images/I/51ECtYHLw6L._AC_SY200_.jpg",
    },
    {
      id: 20,

      image: "https://m.media-amazon.com/images/I/51tj3Znd0JL._AC_SY200_.jpg",
    },
    {
      id: 21,

      image: "https://m.media-amazon.com/images/I/61vWAbbZjVL._AC_SY200_.jpg",
    },
    {
      id: 22,

      image: "https://m.media-amazon.com/images/I/41YMxB8GbOL._AC_SY200_.jpg",
    },
    {
      id: 23,

      image: "https://m.media-amazon.com/images/I/419w4PBH11L._AC_SY200_.jpg",
    },
    {
      id: 24,

      image: "https://m.media-amazon.com/images/I/51fAGg6vxkL._AC_SY200_.jpg",
    },
    {
      id: 25,

      image: "https://m.media-amazon.com/images/I/41VH+kTbEgL._AC_SY200_.jpg",
    },
    {
      id: 26,

      image: "https://m.media-amazon.com/images/I/51YJWnJeCoL._AC_SY200_.jpg",
    },
    {
      id: 27,

      image: "https://m.media-amazon.com/images/I/61jaQAARpwL._AC_SY200_.jpg",
    },
    {
      id: 28,

      image: "https://m.media-amazon.com/images/I/51JY3BnT-6L._AC_SY200_.jpg",
    },
    {
      id: 29,

      image: "https://m.media-amazon.com/images/I/61mqQLudIIL._AC_SY200_.jpg",
    },
    {
      id: 30,

      image: "https://m.media-amazon.com/images/I/61FDV10Re5L._AC_SY200_.jpg",
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
        <h2>Best Sellers in Beauty</h2><a href="hello.com" className="product__link">See All Offers</a>
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

export default ProductCarousel4;
