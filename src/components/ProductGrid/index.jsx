import React from "react";
import ProductCard from "./children/ProductCard";
import Slide from "react-reveal/Slide";
import "./styles.scss";
import BestSeller1 from "../../assets/images/BestSeller1@2X.jpg";
import BestSeller2 from "../../assets/images/BestSeller2@2X.jpg";
import BestSeller3 from "../../assets/images/BestSeller3@2X.jpg";

const ProductGrid = () => {
  return (
    <section className="container-fluid xpmedia-brands-product-grid">
      <h1 className="product-grid-header">Best Sellers</h1>
      <div className="row">
        <Slide bottom big>
          <div className="col-sm-12 col-md-xl-4">
            <ProductCard
              img={BestSeller1}
              productName="The Performance Chino"
              price="$87"
            />
          </div>
        </Slide>
        <Slide bottom big>
          <div className="col-sm-12 col-md-xl-4">
            <ProductCard
              img={BestSeller2}
              productName="The Dream Pant"
              price="$76"
            />
          </div>
        </Slide>
        <Slide bottom big>
          <div className="col-sm-12 col-md-xl-4">
            <ProductCard
              img={BestSeller3}
              productName="The Cashmere Square Turtleneck"
              price="$165"
            />
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default ProductGrid;
