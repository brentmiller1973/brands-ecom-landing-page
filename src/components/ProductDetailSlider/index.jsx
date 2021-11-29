import React from "react";
import SlideCard from "./children/SlideCard";
import Slide from "react-reveal/Slide";
import "./styles.scss";

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

const ProductDetailSlider = ({ sectionTitle = null, productData = [] }) => {
  return (
    <section className="xpmedia-brands-product-detail-card-slider">
      {sectionTitle && <h1 className="slider-header">{sectionTitle}</h1>}

      <Slider {...settings}>
        {productData.map((item) => {
          return (
            <SlideCard
              img={item.image}
              imgAlt={item.imageAlt}
              link={item.link || false}
              header={item.header || null}
              description={item.description || null}
            />
          );
        })}
      </Slider>
    </section>
  );
};

export default ProductDetailSlider;
