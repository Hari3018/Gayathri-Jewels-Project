import React, { useState, useEffect } from "react";
import Slider from "react-slick"; // Importing Slick Carousel
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard"; // Importing ProductCard Component
import "./Home.css";

const Home = () => {
  const carouselImages = [
    "/IMG-20250114-WA0013.jpg",
    "/IMG-20250114-WA0014.jpg",
    "/IMG-20250114-WA0015.jpg",
  ]; 

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // State to track if the user has scrolled to the bottom
  const [showFooter, setShowFooter] = useState(false);

  // Function to check if the user is at the bottom of the page
  const handleScroll = () => {
    const contentHeight = document.documentElement.scrollHeight; // Total height of the page
    const visibleHeight = window.innerHeight; // Visible part of the page
    const scrolledHeight = window.scrollY; // How far the user has scrolled

    if (scrolledHeight + visibleHeight >= contentHeight - 1) {
      setShowFooter(true); // User has reached the bottom
    } else {
      setShowFooter(false); // User is not at the bottom
    }
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, []);

  return (
    <div className="content">
      {/* Carousel */}
      <h1>Welcome to Gayathri Jewels</h1>
      <div className="carousel">
        <Slider {...sliderSettings}>
          {carouselImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Product Gallery */}
      <div className="product-gallery">
        <ProductCard
          title="Gold Necklace"
          price="₹50000"
          image="/IMG-20250114-WA0015.jpg"
        />
        <ProductCard
          title="Diamond Ring"
          price="₹20000"
          image="/IMG-20250114-WA0017.jpg"
        />
        <ProductCard
          title="Silver Bracelet"
          price="₹15000"
          image="/IMG-20250114-WA0016.jpg"
        />
      </div>

      {/* Footer (Only visible at the bottom) */}
      {showFooter && <Footer />}
    </div>
  );
};

export default Home;
