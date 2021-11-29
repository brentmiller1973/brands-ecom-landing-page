import React from "react";
import AlertBar from "../AlertBar";
import NavMenu from "../NavMenu";
import ProductQuantityInput from "../ProductQuantityInput";
import "./styles.scss";
import "./productDetailTopChain.scss";
import "./productDetailMidChain.scss";
import "./accordion.scss";
import ProductDetailSlider from "../ProductDetailSlider";
import Footer from "../Footer";
import ReactTooltip from "react-tooltip";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

import one from "../../assets/images/product-detail-page/one.jpeg";
import two from "../../assets/images/product-detail-page/two.png";
import three from "../../assets/images/product-detail-page/three.png";
import four from "../../assets/images/product-detail-page/four.png";
import five from "../../assets/images/product-detail-page/five.png";
import six from "../../assets/images/product-detail-page/six.png";
import seven from "../../assets/images/product-detail-page/seven.png";
import eight from "../../assets/images/product-detail-page/eight.png";
import nine from "../../assets/images/product-detail-page/nine.png";
import ten from "../../assets/images/product-detail-page/ten.jpeg";
import eleven from "../../assets/images/product-detail-page/eleven.jpeg";
import twelve from "../../assets/images/product-detail-page/twelve.png";
import thirteen from "../../assets/images/product-detail-page/thirteen.png";
import filledStarIcon from "../../assets/icons/star-filled.svg";
import emptyStarIcon from "../../assets/icons/star-empty.svg";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const ProductDetailSliderDataTop = [
  {
    image: one,
    imageAlt: "one",
    link: false,
  },
  {
    image: two,
    imageAlt: "two",
    link: false,
  },
  {
    image: three,
    imageAlt: "three",
    link: false,
  },
  {
    image: four,
    imageAlt: "four",
    link: false,
  },
  {
    image: five,
    imageAlt: "five",
    link: false,
  },
  {
    image: six,
    imageAlt: "six",
    link: false,
  },
];
const ProductDetailSliderDataBottom = [
  {
    image: ten,
    imageAlt: "The Track Crewneck",
    link: true,
    header: "The Track Crewneck",
    description: "$64",
  },
  {
    image: eleven,
    imageAlt: "The Track Crewneck",
    link: true,
    header: "The Track Crewneck",
    description: "$64",
  },
  {
    image: twelve,
    imageAlt: "The Track Crewneck",
    link: true,
    header: "The Track Crewneck",
    description: "$64",
  },
  {
    image: thirteen,
    imageAlt: "The Track Crewneck",
    link: true,
    header: "The Track Crewneck",
    description: "$64",
  },
];

const ProductDetailPageLayout = () => {
  return (
    <div className="container xpmedia-brands-product-detail-page-layout">
      <AlertBar />
      <NavMenu />
      <main>
        <Fade delay={600}>
          <div className="product-detail-top-chain">
            <section className="product-detail-image-grid">
              <img alt="one" src={one} />
              <img alt="two" src={two} />
              <img alt="three" src={three} />
              <img alt="four" src={four} />
              <img alt="five" src={five} />
              <img alt="six" src={six} />
            </section>
            <section className="product-detail-image-grid-mobile">
              <div>
                <ProductDetailSlider productData={ProductDetailSliderDataTop} />
              </div>
            </section>

            <section className="product-detail-head">
              <div className="product-breadcrumbs">
                Home / Women / The Dream Pant
              </div>
              <div className="product-name-and-price">
                <h1>The Dream Pant</h1>
                <div className="price">$76</div>
              </div>
              <div className="review-summary">
                <img
                  alt="4 out 5 stars"
                  className="star"
                  src={filledStarIcon}
                />
                <img
                  alt="4 out 5 stars"
                  className="star"
                  src={filledStarIcon}
                />
                <img
                  alt="4 out 5 stars"
                  className="star"
                  src={filledStarIcon}
                />
                <img
                  alt="4 out 5 stars"
                  className="star"
                  src={filledStarIcon}
                />
                <img alt="4 out 5 stars" className="star" src={emptyStarIcon} />
                <span>4/5 | See Reviews</span>
              </div>
            </section>

            <div className="product-detail-additional">
              <section className="product-detail-swatch">
                <h1 className="product-detail-section-heading">Canvas</h1>
                <div className="swatch-row">
                  <ReactTooltip place="top" type="dark" effect="solid" />
                  <button
                    data-tip="Black"
                    style={{ backgroundColor: "#191919" }}
                  />
                  <button
                    data-tip="Silver Grey"
                    style={{ backgroundColor: "#716e6a" }}
                  />
                  <button
                    data-tip="Forest Green"
                    style={{ backgroundColor: "#546127" }}
                  />
                  <button
                    data-tip="Tan"
                    style={{ backgroundColor: "#f4edda" }}
                  />
                </div>
              </section>

              <section className="product-detail-selection">
                <h1 className="product-detail-section-heading">Size</h1>
                <div className="selection-row">
                  <ul>
                    <li>
                      <input type="radio" id="xs-option" name="selector" />
                      <div className="check">
                        <label htmlFor="xs-option">XS</label>
                      </div>
                    </li>

                    <li>
                      <input type="radio" id="s-option" name="selector" />
                      <div className="check">
                        <label htmlFor="s-option">S</label>
                      </div>
                    </li>

                    <li>
                      <input type="radio" id="m-option" name="selector" />
                      <div className="check">
                        <label htmlFor="m-option">M</label>
                      </div>
                    </li>

                    <li>
                      <input type="radio" id="l-option" name="selector" />
                      <div className="check">
                        <label htmlFor="l-option">L</label>
                      </div>
                    </li>

                    <li>
                      <input type="radio" id="xl-option" name="selector" />
                      <div className="check">
                        <label htmlFor="xl-option">XL</label>
                      </div>
                    </li>
                  </ul>
                </div>
                <a href="#">Size Guide</a>
              </section>

              <section className="product-detail-quantity-and-add">
                <label htmlFor="quantity">Quantity</label>

                <ProductQuantityInput />

                <button className="addToCartBtn">Add to Bag</button>
              </section>

              <section className="product-detail-text-detail">
                <h1>Details</h1>
                <p>
                  Model is 5′11″Wearing size L
                  <br />
                  Inseam: 26.5"
                  <br />
                  58% Cotton, 38% Modal, 4% Elastane
                  <br />
                  Machine wash cold. Hang to dry.
                  <br />
                  Made in Ho Chi Minh, Vietnam
                </p>
              </section>

              <section className="product-detail-text-description">
                <h1>Description</h1>
                <p>
                  Tailored look. Sweatpant feel. Made of soft double-knit
                  fabric, the Dream Pant features an elastic waist, pintuck
                  detailing, and a sleek tapered leg. Plus, it has a flat
                  finish, so it looks polished, but it’s comfortable enough to
                  nap in. The best part? It’s wrinkle resistant. From morning
                  meetings to afternoon errands to late-night lounging—this pant
                  looks (and feels) like a dream.
                </p>
              </section>

              <section className="product-detail-info-accordion">
                <Accordion
                  allowMultipleExpanded={true}
                  allowZeroExpanded={true}
                >
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>Size & Fit</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Shipping & Returns
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </section>
            </div>
          </div>
        </Fade>
        <div className="product-detail-mid-chain">
          <section className="product-detail-promo">
            <Slide left>
              <img
                className="product-detail-promo-img"
                alt="A product image"
                src={seven}
              />
            </Slide>
            <Slide right>
              <div className="product-detail-promo-description">
                <h1>
                  If it was made from sweat,
                  <br />
                  Then it was made from oil.
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus vestibulum nunc non malesuada tempor. Nulla
                  convallis pretium ornare. Integer interdum leo vel accumsan
                  luctus. Vestibulum ac augue efficitur, egestas libero sed,
                  volutpat enim. Pellentesque id nulla sapien. In vitae
                  condimentum tellus. Donec eget laoreet arcu, dignissim dapibus
                  elit.
                </p>
              </div>
            </Slide>
          </section>

          <section className="product-detail-promo reverse">
            <Slide right>
              <img
                className="product-detail-promo-img"
                alt="A product image"
                src={eight}
              />
            </Slide>
            <Slide left>
              <div className="product-detail-promo-description">
                <h1>
                  If it was made from sweat,
                  <br />
                  Then it was made from oil.
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus vestibulum nunc non malesuada tempor. Nulla
                  convallis pretium ornare. Integer interdum leo vel accumsan
                  luctus. Vestibulum ac augue efficitur, egestas libero sed,
                  volutpat enim. Pellentesque id nulla sapien. In vitae
                  condimentum tellus. Donec eget laoreet arcu, dignissim dapibus
                  elit.
                </p>
              </div>
            </Slide>
          </section>

          <section className="product-detail-promo">
            <Slide left>
              <img
                className="product-detail-promo-img"
                alt="A product image"
                src={nine}
              />
            </Slide>
            <Slide right>
              <div className="product-detail-promo-description">
                <h1>
                  If it was made from sweat,
                  <br />
                  Then it was made from oil.
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus vestibulum nunc non malesuada tempor. Nulla
                  convallis pretium ornare. Integer interdum leo vel accumsan
                  luctus. Vestibulum ac augue efficitur, egestas libero sed,
                  volutpat enim. Pellentesque id nulla sapien. In vitae
                  condimentum tellus. Donec eget laoreet arcu, dignissim dapibus
                  elit.
                </p>
              </div>
            </Slide>
          </section>
        </div>
        <Fade>
          <ProductDetailSlider
            sectionTitle="You Might Also Like"
            productData={ProductDetailSliderDataBottom}
          />
        </Fade>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPageLayout;
