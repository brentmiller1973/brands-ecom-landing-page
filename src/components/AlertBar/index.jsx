import React from "react";
import { Fade } from "react-awesome-reveal";
import "./styles.scss";

const AlertBar = () => {
  return (
    <div className="xpmedia-brands-alert-bar">
      <Fade>
        <p className="text-5 worksans-normal-white-16px">
          Free shipping on orders over $50. Free returns.
        </p>
      </Fade>
    </div>
  );
};

export default AlertBar;
