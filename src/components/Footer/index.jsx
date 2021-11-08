import React from "react";
import { Fade } from "react-awesome-reveal";
import "./styles.scss";

const Footer = () => {
  return (
    <footer className="container-fluid xpmedia-brands-footer">
      <div className="row">
        <Fade>
          <div className="col-lg-xl-3 col-md-6 col-sm-12">
            <h1>Account</h1>
            <div>Manage Account</div>
            <div>Saved Items</div>
            <div>Orders &amp; Returns</div>
            <div>Redeem a Gift Card</div>
          </div>
        </Fade>

        <Fade>
          <div className="col-lg-xl-3 col-md-6 col-sm-12">
            <h1>Company</h1>
            <div>About</div>
            <div>Environmental Initiatives</div>
            <div>Factories</div>
            <div>Mission</div>
            <div>Accessibility</div>
            <div>Careers</div>
          </div>
        </Fade>

        <Fade>
          <div className="col-lg-xl-3 col-md-6 col-sm-12">
            <h1>Contact Us</h1>
            <div>Help</div>
            <div>FAQ</div>
            <div>Affiliates</div>
            <div>Instagram</div>
            <div>Facebook</div>
          </div>
        </Fade>

        <Fade>
          <div className="col-lg-xl-3 col-md-6 col-sm-12">
            <h1>Subscribe</h1>
            <div>
              Sign up for exclusive offers, original stories events and more!
            </div>
            <div className="footer-sign-up">
              <input
                type="text"
                className="signUpInput"
                placeholder="Email Address"
              />
              <button className="signUpBtn">Sign Me Up</button>
            </div>
          </div>
        </Fade>
      </div>
    </footer>
  );
};

export default Footer;
