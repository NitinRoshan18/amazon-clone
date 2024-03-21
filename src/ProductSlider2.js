import React from "react";
import "./ProductSlider2.css";

const ProductCarousel = () => {
  const products = [
    {
      id: 1,

      image: "https://m.media-amazon.com/images/I/61De10B-ooL._AC_SY200_.jpg",
    },
    {
      id: 2,

      image: "https://m.media-amazon.com/images/I/81Ls+SBCLiL._AC_SY200_.jpg",
    },
    {
      id: 3,

      image: "https://m.media-amazon.com/images/I/61E0unKRIZL._AC_SY200_.jpg",
    },
    {
      id: 4,

      image: "https://m.media-amazon.com/images/I/512lI7+2SjL._AC_SY200_.jpg",
    },
    {
      id: 5,

      image: "https://m.media-amazon.com/images/I/61XkrQBT7ML._AC_SY200_.jpg",
    },
    {
      id: 6,

      image: "https://m.media-amazon.com/images/I/711c-uf6AFL._AC_SY200_.jpg",
    },
    {
      id: 7,

      image: "https://m.media-amazon.com/images/I/814L+vq01mL._AC_SY200_.jpg",
    },
    {
      id: 8,

      image: "https://m.media-amazon.com/images/I/61-hMfd7NGL._AC_SY200_.jpg",
    },
    {
      id: 9,

      image: "https://m.media-amazon.com/images/I/71CrTyKsazL._AC_SY200_.jpg",
    },
    {
      id: 10,

      image: "https://m.media-amazon.com/images/I/71tIMAvo2wL._AC_SY200_.jpg",
    },
    {
      id: 11,

      image: "https://m.media-amazon.com/images/I/71f4SWBEfYL._AC_SY200_.jpg",
    },
    {
      id: 12,

      image: "https://m.media-amazon.com/images/I/71k7V0QvcdL._AC_SY200_.jpg",
    },
    {
      id: 13,

      image: "https://m.media-amazon.com/images/I/81auuUcUrwL._AC_SY200_.jpg",
    },
    {
      id: 14,

      image: "https://m.media-amazon.com/images/I/71xWWxjzF7L._AC_SY200_.jpg",
    },
    {
      id: 15,

      image: "https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_SY200_.jpg",
    },
    {
      id: 16,

      image: "https://m.media-amazon.com/images/I/71Ytm8A3piL._AC_SY200_.jpg",
    },
    {
      id: 17,

      image: "https://m.media-amazon.com/images/I/715qi-cIbML._AC_SY200_.jpg",
    },
    {
      id: 18,

      image: "https://m.media-amazon.com/images/I/71NM33ZCE1L._AC_SY200_.jpg",
    },
    {
      id: 19,

      image: "https://m.media-amazon.com/images/I/817JpJqs4WL._AC_SY200_.jpg",
    },
    {
      id: 20,

      image: "https://m.media-amazon.com/images/I/41wp4zILYVL._AC_SY200_.jpg",
    },
    {
      id: 21,

      image: "https://m.media-amazon.com/images/I/81ffCmUS6QL._AC_SY200_.jpg",
    },
    {
      id: 22,

      image: "https://m.media-amazon.com/images/I/710GgrTea1L._AC_SY200_.jpg",
    },
    {
      id: 23,

      image: "https://m.media-amazon.com/images/I/81NS3ASjoNL._AC_SY200_.jpg",
    },
    {
      id: 24,

      image: "https://m.media-amazon.com/images/I/61l7kkcaGFL._AC_SY200_.jpg",
    },
    {
      id: 25,

      image: "https://m.media-amazon.com/images/I/91xAvyJmUUL._AC_SY200_.jpg",
    },
    {
      id: 26,

      image: "https://m.media-amazon.com/images/I/618XGVFYlwL._AC_SY200_.jpg",
    },
    {
      id: 27,

      image: "https://m.media-amazon.com/images/I/81e5Foz07yL._AC_SY200_.jpg",
    },
    {
      id: 28,

      image: "https://m.media-amazon.com/images/I/71kUYNSKKgL._AC_SY200_.jpg",
    },
    {
      id: 29,

      image: "https://m.media-amazon.com/images/I/81c9fqRc9sL._AC_SY200_.jpg",
    },
    {
      id: 30,

      image: "https://m.media-amazon.com/images/I/81ZiMSpnmDL._AC_SY200_.jpg",
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
    <div className="carousel_container">
      <span className="product__header">
        <h2>Best Sellers in Books</h2>{" "}
      </span>
      <button className="scroll-button left" onClick={scrollLeft}>
        &lt;
      </button>
      <div className="product-carousel" ref={carouselRef}>
        {products.map((product) => (
          <div className="product_container" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
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

export default ProductCarousel;
