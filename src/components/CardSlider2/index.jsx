import React from "react";
import SlideCard from "./children/SlideCard";
import Slide from "react-reveal/Slide";
import "./styles.scss";
import story1Img from "../../assets/images/Stories1@2X.jpg";
import story2Img from "../../assets/images/Stories2@2X.jpg";
import story3Img from "../../assets/images/Stories3@2X.jpg";
import story4Img from "../../assets/images/Stories4@2X.jpg";

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

const CardSlider2 = () => {
  return (
    <section className="container-fluid xpmedia-brands-card-slider">
      <h1 className="slider-header">Shop by Stories</h1>
      <Slider {...settings}>
        <SlideCard
          img={story1Img}
          header="Planet Friendly Clothing"
          decription="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."
        />
        <SlideCard
          img={story2Img}
          header="What To Wear Fall 2021"
          decription="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."
        />
        <SlideCard
          img={story3Img}
          header="Milos Looks In The Wild"
          decription="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."
        />
        <SlideCard
          img={story4Img}
          header="Fall Look Book"
          decription="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."
        />
      </Slider>
    </section>
  );
};

export default CardSlider2;
