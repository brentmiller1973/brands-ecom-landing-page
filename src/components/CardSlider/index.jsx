import React from "react";
import SlideCard from "./children/SlideCard";
import "./styles.scss";
import cat1Img from "../../assets/images/Category1@2X.jpg";
import cat2Img from "../../assets/images/Category2@2X.jpg";
import cat3Img from "../../assets/images/Category3@2X.jpg";
import cat4Img from "../../assets/images/Category4@2X.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: false,
      },
    },
  ],
};

const CardSlider = () => {
  return (
    <section className="container-fluid xpmedia-brands-card-slider">
      <Slider {...settings}>
        <SlideCard img={cat1Img} category="Woman" />
        <SlideCard img={cat2Img} category="Men" />
        <SlideCard img={cat3Img} category="Denim" />
        <SlideCard img={cat4Img} category="Sweaters" />
      </Slider>
    </section>
  );
};

export default CardSlider;
