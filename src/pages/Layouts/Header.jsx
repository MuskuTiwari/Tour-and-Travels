import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="main-header flex">
      {/* Header Lower */}
      <div id="header">
        <div className="header-top">
          <div className="header-top-wrap flex-two">
            <div className="header-top-right">
              <ul className=" flex-three">
                <li className="flex-three">
                  <i className="icon-day" />
                  <span>Thursday, Mar 26, 2021</span>
                </li>
                <li className="flex-three">
                  <i className="icon-mail" />
                  <span>Info@Webmail.Com</span>
                </li>
                <li className="flex-three">
                  <i className="icon-phone" />
                  <span>684 555-0102 490</span>
                </li>
              </ul>
            </div>
            <div className="header-top-left flex-two">
              <Link to="contact-us.html" className="booking">
                <i className="icon-19" />
                <span>Booking Now</span>
              </Link>
              <div className="follow-social flex-two">
                <span>Follow Us :</span>
                <ul className="flex-two">
                  <li>
                    <Link to="#">
                      <i className="icon-icon-2" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="icon-icon_03" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="icon-x" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="icon-icon" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-lower">
          <div className="tf-container full">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-container flex justify-space align-center">
                  {/* Logo Box */}
                  <div className="mobile-nav-toggler mobie-mt mobile-button">
                    <i className="icon-Vector3" />
                  </div>
                  <div className="logo-box">
                    <div className="logo">
                      <Link to="index.html">
                        <img src="./assets/images/logo.png" alt="Logo" />
                      </Link>
                    </div>
                  </div>
                  <div className="nav-outer flex align-center">
                    {/* Main Menu */}
                    <nav className="main-menu show navbar-expand-md">
                      <div
                        className="navbar-collapse collapse clearfix"
                        id="navbarSupportedContent"
                      >
                        <ul className="navigation clearfix">
                          <li className=" current">
                            <Link to="/">Home</Link>
                          </li>
                          <li className="">
                            <Link to="/tour">Tour</Link>
                          </li>
                          <li className="">
                            <Link to="/destination">Destination</Link>
                          </li>
                          <li className=" ">
                            <Link to="/blog">Blog</Link>
                          </li>
                          <li className="dropdown2">
                            <Link to="#">Pages</Link>
                            <ul>
                              <li>
                                <Link to="/about">About Us</Link>
                              </li>
                              <li>
                                <Link to="/team">Team member</Link>
                              </li>
                              <li>
                                <Link to="/gallery">Gallery</Link>
                              </li>
                              <li>
                                <Link to="/termsandconditions">
                                  Terms &amp; Condition
                                </Link>
                              </li>
                              <li>
                                <Link to="/helpcenter">Help center</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="">
                            <Link to="/dashboard">Dashboard</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                    {/* Main Menu End*/}
                  </div>
                  <div className="header-account flex align-center">
                    <div className="language">
                      <div className="nice-select" tabIndex={0}>
                        <img src="./assets/images/page/language.svg" alt />
                        <span className="current">English</span>
                        <ul className="list">
                          <li data-value className="option selected">
                            <img src="./assets/images/page/language.svg" alt />
                            English
                          </li>
                          <li data-value="Vietnam" className="option">
                            <img src="./assets/images/page/language.svg" alt />
                            Vietnam
                          </li>
                          <li data-value="German" className="option">
                            <img src="./assets/images/page/language.svg" alt />
                            German
                          </li>
                          <li data-value="Russian" className="option">
                            <img src="./assets/images/page/language.svg" alt />
                            Russian
                          </li>
                          <li data-value="Canada" className="option">
                            <img src="./assets/images/page/language.svg" alt />
                            Canada
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="currency">
                      <div className="nice-select" tabIndex={0}>
                        <span className="current">USD</span>
                        <ul className="list">
                          <li data-value className="option selected">
                            USD
                          </li>
                          <li data-value="vnd" className="option">
                            VND
                          </li>
                          <li data-value="ero" className="option">
                            ERO
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="search-mobie relative">
                      <div className="dropdown">
                        <a
                          type="button"
                          className="show-search"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="icon-Vector5" />
                        </a>
                        <ul className="dropdown-menu top-search">
                          <form action="/" id="search-bar-widget">
                            <input type="text" placeholder="Search here..." />
                            <button type="button">
                              <i className="icon-search-2" />
                            </button>
                          </form>
                        </ul>
                      </div>
                    </div>
                    <div className="register">
                      <ul className="flex align-center">
                        <li>
                          <Link to="login.html" className="flex-three">
                            <img
                              src="./assets/images/page/avata.jpg"
                              alt="image"
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src="./assets/images/page/fl1.png" alt className="fly-ab" />
        </div>
      </div>
      {/* End Header Lower */}
      <a
        href="#"
        className="header-sidebar flex-three"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <i className="icon-Bars" />
      </a>
      {/* Mobile Menu  */}
      <div className="close-btn">
        <span className="icon flaticon-cancel-1" />
      </div>
      <div className="mobile-menu">
        <div className="menu-backdrop" />
        <nav className="menu-box">
          <div className="nav-logo">
            <Link to="index.html">
              <img src="./assets/images/logo2.png" alt />
            </Link>
          </div>
          <div className="bottom-canvas">
            <div className="menu-outer"></div>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
    </header>
  );
}

export default Header;
