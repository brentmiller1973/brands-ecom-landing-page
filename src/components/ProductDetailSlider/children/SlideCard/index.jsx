import React from "react";
import "./styles.scss";

const SlideCard = ({ img, imgAlt, link = false, header, description }) => {
  return (
    <div className="xpmedia-brands-slide-card">
      {link ? (
        <a href="#" title={imgAlt}>
          <img alt={imgAlt} src={img} />
        </a>
      ) : (
        <img alt={imgAlt} src={img} />
      )}

      {header && <h1 className="category">{header}</h1>}
      {description && <p>{description}</p>}
    </div>
  );
};

export default SlideCard;
