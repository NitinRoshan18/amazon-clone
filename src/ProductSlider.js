import React from "react";
import "./ProductSlider.css";


const ProductCarousel = () => {
  const products = [
    {
      id: 1,
      
      image: "https://m.media-amazon.com/images/I/41Xe96WtZoL._AC_SY200_.jpg",
      discount: "Up to 10% Off ",
      discount2: "Limited Time Deal",
      name: "Oneplus Nord CE 3 Lite 5G",
      
    },
    {
      id: 2,
     
      image: "https://m.media-amazon.com/images/I/41tSQSq1xJL._AC_SY200_.jpg",
      discount: "Up to 27% Off ",
      discount2: "Limited Time Deal",
      name: "Realme Narzo 60x 5G",
      
    },
    {
      id: 3,
      
      image: "https://m.media-amazon.com/images/I/41m-C1HHkIL._AC_SY200_.jpg",
      discount: "Up to 11% Off ",
      discount2: "Limited Time Deal",
      name: "iQOO Neo9 Pro",
      
    },
    {
      id: 4,
     
      image: "https://m.media-amazon.com/images/I/41yAce7gd4L._AC_SY200_.jpg",
      discount: "Up to 11% Off ",
      discount2: "Limited Time Deal",
      name: "iQOO Z7 Pro",
      
    },
    {
      id: 5,
      
      image: "https://m.media-amazon.com/images/I/41GsqdiCvOL._AC_SY200_.jpg",
      discount: "Up to 28% Off ",
      discount2: "Limited Time Deal",
      name: "Redmi 12 5G",
      
    },
    {
      id: 6,
      
      image: "https://m.media-amazon.com/images/I/411gvmvNQzL._AC_SY200_.jpg",
      discount: "Up to 28% Off ",
      discount2: "Limited Time Deal",
      name: "iQOO 12 5G",
      
    },
    {
      id: 7,
      name: "Redmi 13C",
      image: "https://m.media-amazon.com/images/I/411iWoJEJjL._AC_SY200_.jpg",
      discount: "Up to 28% Off ",
      discount2: "Limited Time Deal",
    },
    {
      id: 8,
      name: "iQOO Z6 Lite",
      image: "https://m.media-amazon.com/images/I/4105IiC5tDL._AC_SY200_.jpg",
      discount: "Up to 28% Off ",
      discount2: "Limited Time Deal",
     
    },
    {
      id: 9,
      name: "iQOO Neo 7 Pro",
      image: "https://m.media-amazon.com/images/I/51o13K4h3-L._AC_SY200_.jpg",
      discount: "Up to 28% Off ",
      discount2: "Limited Time Deal",
    },
    {
      id: 10,
      name: "Poco M6 Pro 5G",
      image: "https://m.media-amazon.com/images/I/41888-BWxKL._AC_SY200_.jpg",
      discount: " 34% Off ",
      discount2: "Limited Time Deal",
    },
    {
      id: 11,
      name: "Poco C55",
      image: "https://m.media-amazon.com/images/I/41ArHnIL7uL._AC_SY200_.jpg",
      discount: " 54% Off ",
      discount2: "Limited Time Deal",
    },
    {
      id: 12,
      name: "Poco C51",
      image: "https://m.media-amazon.com/images/I/41lois+jAAL._AC_SY200_.jpg",
      discount: "45% Off",
      discount2: "Limited Time Deal",
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
    <div className="carousel-container">
      <span className="product__header"><h2>Today's Deals</h2> <a href="hello.com" className="product__link">See All Deals</a></span>
      <button className="scroll-button left" onClick={scrollLeft} >&lt;
      </button>
      <div className="product-carousel" ref={carouselRef}>
        {products.map((product) => (
          <div className="product-container" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
             <span className="product-discount">
               <p className="product-discount1">{product.discount} </p>
               <span className="product-discount2">{product.discount2}</span>
             </span>
              <div className="product-name">{product.name}</div>
              
            </div>
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
