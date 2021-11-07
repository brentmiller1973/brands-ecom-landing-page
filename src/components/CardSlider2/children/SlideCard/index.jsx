import React from "react";
import "./styles.scss";

const SlideCard = ({ img, header, decription }) => {
  return (
    <div className="xpmedia-brands-slide-card">
      <a href="#" title={header}>
        <img alt={header} src={img} />
      </a>
      <h1 className="category">{header}</h1>
      <p>{decription}</p>
    </div>
  );
};

export default SlideCard;
