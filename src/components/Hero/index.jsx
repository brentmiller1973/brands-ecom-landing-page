import React from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import "./styles.scss";
import hero from "../../assets/images/Hero@2X.jpg";
// import mouse from "../../assets/images/mouse.svg";

const Hero = () => {
  return (
    <section className="container-fluid hero">
      <div className="row">
        <div
          className="col-sm-xl-12 hero-image-wrapper"
          style={{ backgroundImage: `url(${hero})` }}
        />
        <div className="col-sm-xl-12 info-wrapper">
          <Fade bottom delay={800}>
            <div className="info-panel">
              <h1>All The Fall Things</h1>
              <p>Versatile. Slightly-cooler temps and light layers.</p>
              <Slide bottom big delay={1000}>
                <div className="buttonWrapper">
                  <button className="heroBtn">Shop Women</button>
                  <button className="heroBtn">Shop Men</button>
                </div>
              </Slide>
            </div>
          </Fade>
        </div>
      </div>

      {/*<div className="scroll-indicator-wrapper">*/}
      {/*  <img src={mouse} alt="scroll" />*/}
      {/*</div>*/}
    </section>
  );
};

export default Hero;
