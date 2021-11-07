import React from "react";
import "./styles.scss";

const SlideCard = ({ img, category }) => {
  return (
    <div className="xpmedia-brands-slide-card">
      <a href="#" title={category}>
        <img alt={category} src={img} />
      </a>
      <h1 className="category">{category}</h1>
    </div>
  );
};

export default SlideCard;
