import React from "react";
import AlertBar from "../AlertBar";
import NavMenu from "../NavMenu";
import Hero from "../Hero";
import "./styles.scss";
import ProductGrid from "../ProductGrid";
import Promo from "../Promo";
import CardSlider from "../CardSlider";
import VideoPromo from "../VideoPromo";
import CardSlider2 from "../CardSlider2";
import MasonryGrid from "../MasonryGrid";
import Footer from "../Footer";

const LandingPageLayout = () => {
  return (
    <div className="container xpmedia-brands-landing-page-layout">
      <AlertBar />
      <NavMenu />
      <main>
        <Hero />
        <ProductGrid />
        <Promo />
        <CardSlider />
        <VideoPromo />
        <CardSlider2 />
        <MasonryGrid />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
