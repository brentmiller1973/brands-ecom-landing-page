import React from "react";
import { Fade } from "react-awesome-reveal";
import "./styles.scss";

const ProductCard = ({ img, productName, price }) => {
  return (
    <div className="xpmedia-brands-product-card">
      <a href="#" title={productName}>
        <img alt={productName} src={img} />
      </a>
      <Fade>
        <div>{productName}</div>
        <div>{price}</div>
      </Fade>
    </div>
  );
};

export default ProductCard;
