import React from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import "./styles.scss";
import NewArrivals1 from "../../assets/images/NewArrivals1@2X.jpg";
import NewArrivals2 from "../../assets/images/NewArrivals2@2X.jpg";
import NewArrivals3 from "../../assets/images/NewArrivals3@2X.jpg";

const MasonryGrid = () => {
  return (
    <section className="container-fluid xpmedia-brands-masonry-grid">
      <div className="image-grid">
        <div className="image-grid-col-2 image-grid-row-2 img-hover-zoom">
          <img src={NewArrivals1} alt="NewArrivals1" />
          <div className="info-overlay">
            <h1 className="info-overlay-header-light">The Chunky Cardigan</h1>
            <button className="masonBtn">Shop</button>
          </div>
        </div>
        <div className="img-hover-zoom">
          <img src={NewArrivals2} alt="NewArrivals2" />
          <div className="info-overlay">
            <h1 className="info-overlay-header-dark">The Premium Crew</h1>
            <button className="masonBtn">Shop</button>
          </div>
        </div>
        <div className="img-hover-zoom">
          <img src={NewArrivals3} alt="NewArrivals3" />
          <div className="info-overlay">
            <h1 className="info-overlay-header-dark">The No Sweat Sweater</h1>
            <button className="masonBtn">Shop</button>
          </div>
        </div>
        {/*<img src="https://loremflickr.com/800/600" alt="architecture" />*/}
        {/*<img src="https://loremflickr.com/800/600" alt="architecture" />*/}
      </div>
    </section>
  );
};

export default MasonryGrid;
