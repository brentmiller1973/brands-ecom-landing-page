import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleDown,
  faSearch,
  faUser,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/MILOS-logo-dark.svg";
import p1Img from "../../assets/images/Stories1@2X.jpg";
import p2Img from "../../assets/images/Stories2@2X.jpg";
import p3Img from "../../assets/images/Stories3@2X.jpg";
import p4Img from "../../assets/images/Stories4@2X.jpg";
import shop1 from "../../assets/images/menu/shop1.jpg";
import "./styles.scss";

const HeaderNav = () => {
  const menuRef = useRef();
  const menuMainRef = useRef();
  const goBackRef = useRef();
  const menuOverlayRef = useRef();
  const menuTriggerRef = useRef();
  const mobileMenuCloseRef = useRef();
  const subMenuRef = useRef();

  const menuMainClick = (e) => {
    if (!menuRef.current.classList.contains("active")) {
      return;
    }
    if (e.target.closest(".menu-item-has-children")) {
      const hasChildren = e.target.closest(".menu-item-has-children");
      showSubMenu(hasChildren);
    }
  };

  const goBackClick = () => {
    hideSubMenu();
  };
  const menuOverlayClick = () => {
    toggleMenu();
  };

  const toggleMenu = () => {
    menuRef.current.classList.toggle("active");
    menuOverlayRef.current.classList.toggle("active");
  };

  function showSubMenu(hasChildren) {
    subMenuRef.current = hasChildren.querySelector(".sub-menu");
    subMenuRef.current.classList.add("active");
    subMenuRef.current.style.animation = "slideLeft 0.5s ease forwards";
    menuRef.current.querySelector(".current-menu-title").innerHTML =
      hasChildren.querySelector("a").childNodes[0].textContent;
    menuRef.current.querySelector(".mobile-menu-head").classList.add("active");
  }

  function hideSubMenu() {
    subMenuRef.current.style.animation = "slideRight 0.5s ease forwards";
    setTimeout(() => {
      subMenuRef.current.classList.remove("active");
    }, 300);
    menuRef.current.querySelector(".current-menu-title").innerHTML = "";
    menuRef.current
      .querySelector(".mobile-menu-head")
      .classList.remove("active");
  }

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      if (window.innerWidth > 991) {
        if (menuRef.current.classList.contains("active")) {
          toggleMenu();
        }
      }
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="xpmedia-brands-header">
      <div className="xpmedia-brands-header-container">
        <div className="header-row v-center">
          <div className="header-item item-left">
            <div className="logo">
              <a href="#">
                <img alt="Milos" className="logo" src={logo} />
              </a>
            </div>
          </div>
          <div className="header-item item-center">
            <div
              className="menu-overlay"
              ref={menuOverlayRef}
              onClick={(e) => {
                menuOverlayClick();
              }}
            />
            <nav
              className="menu"
              ref={menuRef}
              onClick={(e) => {
                menuMainClick(e);
              }}
            >
              {/**

               Begin the mobile nav

               **/}
              <div className="mobile-menu-head">
                <div
                  className="go-back"
                  ref={goBackRef}
                  onClick={(e) => {
                    goBackClick(e);
                  }}
                >
                  <FontAwesomeIcon icon={faAngleLeft} />
                </div>
                <div className="current-menu-title" />
                <div
                  className="mobile-menu-close"
                  ref={mobileMenuCloseRef}
                  onClick={(e) => {
                    toggleMenu();
                  }}
                >
                  &times;
                </div>
              </div>
              {/**

               End the mobile nav

               **/}

              {/**

               Begin main menu

               **/}
              <ul className="menu-main" ref={menuMainRef}>
                <li className="menu-item-has-children">
                  <a href="#">
                    Men <FontAwesomeIcon icon={faAngleDown} />
                  </a>
                  <div className="sub-menu mega-menu mega-menu-column-4">
                    <div className="list-item">
                      <h4 className="title">Featured</h4>
                      <ul>
                        <li>
                          <a href="#">New Arrivals</a>
                        </li>
                        <li>
                          <a href="#">Best Sellers</a>
                        </li>
                        <li>
                          <a href="#">Back in Stock</a>
                        </li>
                        <li>
                          <a href="#">New for Fall</a>
                        </li>
                        <li>
                          <a href="#">Sale</a>
                        </li>
                      </ul>
                    </div>
                    <div className="list-item">
                      <h4 className="title">Apparel</h4>
                      <ul>
                        <li>
                          <a href="#">Denim</a>
                        </li>
                        <li>
                          <a href="#">Sweaters</a>
                        </li>
                        <li>
                          <a href="#">Pants</a>
                        </li>
                        <li>
                          <a href="#">Shirts & Tops</a>
                        </li>
                        <li>
                          <a href="#">Outerwear</a>
                        </li>
                        <li>
                          <a href="#">Sweatshirt & Sweatpants</a>
                        </li>
                        <li>
                          <a href="#">T-Shirts & Bodysuits</a>
                        </li>
                        <li>
                          <a href="#">Activewear</a>
                        </li>
                        <li>
                          <a href="#">Dresses & Jumpsuits</a>
                        </li>
                        <li>
                          <a href="#">Shorts & Skirts</a>
                        </li>
                        <li>
                          <a href="#">Underwear</a>
                        </li>
                        <li>
                          <a href="#">Swimwear</a>
                        </li>
                      </ul>
                    </div>

                    <div className="list-item">
                      <h4 className="title">Shoes & Accessories</h4>
                      <ul>
                        <li>
                          <a href="#">Shoes & Boots</a>
                        </li>
                        <li>
                          <a href="#">Bags & Backpacks</a>
                        </li>
                        <li>
                          <a href="#">Socks</a>
                        </li>
                        <li>
                          <a href="#">Accessories</a>
                        </li>
                        <li>
                          <a href="#">Gift Cards</a>
                        </li>
                      </ul>
                    </div>
                    <div className="list-item">
                      <h4 className="title">Features</h4>
                      <ul>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">
                    Woman <FontAwesomeIcon icon={faAngleDown} />
                  </a>
                  <div className="sub-menu mega-menu mega-menu-column-4">
                    <div className="list-item">
                      <h4 className="title">Featured</h4>
                      <ul>
                        <li>
                          <a href="#">New Arrivals</a>
                        </li>
                        <li>
                          <a href="#">Best Sellers</a>
                        </li>
                        <li>
                          <a href="#">Back in Stock</a>
                        </li>
                        <li>
                          <a href="#">New for Fall</a>
                        </li>
                        <li>
                          <a href="#">Sale</a>
                        </li>
                      </ul>
                    </div>
                    <div className="list-item">
                      <h4 className="title">Apparel</h4>
                      <ul>
                        <li>
                          <a href="#">Denim</a>
                        </li>
                        <li>
                          <a href="#">Sweaters</a>
                        </li>
                        <li>
                          <a href="#">Pants</a>
                        </li>
                        <li>
                          <a href="#">Shirts & Tops</a>
                        </li>
                        <li>
                          <a href="#">Outerwear</a>
                        </li>
                        <li>
                          <a href="#">Sweatshirt & Sweatpants</a>
                        </li>
                        <li>
                          <a href="#">T-Shirts & Bodysuits</a>
                        </li>
                        <li>
                          <a href="#">Activewear</a>
                        </li>
                        <li>
                          <a href="#">Dresses & Jumpsuits</a>
                        </li>
                        <li>
                          <a href="#">Shorts & Skirts</a>
                        </li>
                        <li>
                          <a href="#">Underwear</a>
                        </li>
                        <li>
                          <a href="#">Swimwear</a>
                        </li>
                      </ul>
                    </div>

                    <div className="list-item">
                      <h4 className="title">Shoes & Accessories</h4>
                      <ul>
                        <li>
                          <a href="#">Shoes & Boots</a>
                        </li>
                        <li>
                          <a href="#">Bags & Backpacks</a>
                        </li>
                        <li>
                          <a href="#">Socks</a>
                        </li>
                        <li>
                          <a href="#">Accessories</a>
                        </li>
                        <li>
                          <a href="#">Gift Cards</a>
                        </li>
                      </ul>
                    </div>
                    <div className="list-item">
                      <h4 className="title">Features</h4>
                      <ul>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">
                    Accessories <FontAwesomeIcon icon={faAngleDown} />
                  </a>
                  <div className="sub-menu mega-menu mega-menu-column-4">
                    <div className="list-item">
                      <h4 className="title">Featured</h4>
                      <ul>
                        <li>
                          <a href="#">New Arrivals</a>
                        </li>
                        <li>
                          <a href="#">Best Sellers</a>
                        </li>
                        <li>
                          <a href="#">Back in Stock</a>
                        </li>
                        <li>
                          <a href="#">New for Fall</a>
                        </li>
                        <li>
                          <a href="#">Sale</a>
                        </li>
                      </ul>
                    </div>
                    <div className="list-item">
                      <h4 className="title">Apparel</h4>
                      <ul>
                        <li>
                          <a href="#">Denim</a>
                        </li>
                        <li>
                          <a href="#">Sweaters</a>
                        </li>
                        <li>
                          <a href="#">Pants</a>
                        </li>
                        <li>
                          <a href="#">Shirts & Tops</a>
                        </li>
                        <li>
                          <a href="#">Outerwear</a>
                        </li>
                        <li>
                          <a href="#">Sweatshirt & Sweatpants</a>
                        </li>
                        <li>
                          <a href="#">T-Shirts & Bodysuits</a>
                        </li>
                        <li>
                          <a href="#">Activewear</a>
                        </li>
                        <li>
                          <a href="#">Dresses & Jumpsuits</a>
                        </li>
                        <li>
                          <a href="#">Shorts & Skirts</a>
                        </li>
                        <li>
                          <a href="#">Underwear</a>
                        </li>
                        <li>
                          <a href="#">Swimwear</a>
                        </li>
                      </ul>
                    </div>

                    <div className="list-item">
                      <h4 className="title">Shoes & Accessories</h4>
                      <ul>
                        <li>
                          <a href="#">Shoes & Boots</a>
                        </li>
                        <li>
                          <a href="#">Bags & Backpacks</a>
                        </li>
                        <li>
                          <a href="#">Socks</a>
                        </li>
                        <li>
                          <a href="#">Accessories</a>
                        </li>
                        <li>
                          <a href="#">Gift Cards</a>
                        </li>
                      </ul>
                    </div>
                    <div className="list-item">
                      <h4 className="title">Features</h4>
                      <ul>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                        <li>
                          <a href="#">Product List</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">
                    About Us <FontAwesomeIcon icon={faAngleDown} />
                  </a>
                  <div className="sub-menu mega-menu mega-menu-column-4">
                    <div className="list-item text-center">
                      <a href="#">
                        <img src={p1Img} alt="new Product" />
                        <h4 className="title">Product 1</h4>
                      </a>
                    </div>
                    <div className="list-item text-center">
                      <a href="#">
                        <img src={p2Img} alt="new Product" />
                        <h4 className="title">Product 2</h4>
                      </a>
                    </div>
                    <div className="list-item text-center">
                      <a href="#">
                        <img src={p3Img} alt="new Product" />
                        <h4 className="title">Product 3</h4>
                      </a>
                    </div>
                    <div className="list-item text-center">
                      <a href="#">
                        <img src={p4Img} alt="new Product" />
                        <h4 className="title">Product 4</h4>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
              {/**

               End main menu

               **/}
            </nav>
          </div>
          <div className="header-item item-right">
            {/*<a href="#">*/}
            {/*  <FontAwesomeIcon icon={faSearch} />*/}
            {/*</a>*/}
            {/*<a href="#">*/}
            {/*  <FontAwesomeIcon icon={faUser} />*/}
            {/*</a>*/}
            {/*<a href="#">*/}
            {/*  <FontAwesomeIcon icon={faShoppingBag} />*/}
            {/*</a>*/}
            <div
              className="mobile-menu-trigger"
              ref={menuTriggerRef}
              onClick={(e) => {
                toggleMenu();
              }}
            >
              <span />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
