import React from "react";
import { Fade } from "react-awesome-reveal";
import "./styles.scss";
import video from "../../assets/images/brand-video.mp4";

const VideoPromo = () => {
  return (
    <section className="container-fluid xpmedia-brands-video-promo">
      <video autoPlay loop muted className="background-video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="text-onlay">
        <Fade top delay={600}>
          <h1>We believe we can all make a difference.</h1>
          <p>
            We’re learning how to become an better company. These are scenes
            from our LA Factory.{" "}
            <a href="#" title="learn more">
              Learn more
            </a>{" "}
            about our initiatives.
          </p>
        </Fade>
      </div>
    </section>
  );
};

export default VideoPromo;
