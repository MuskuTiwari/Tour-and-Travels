import React from 'react'

function TeamMember() {
  return (
  
   <div>
  <div id="wrapper">
    <div id="pagee" className="clearfix">
      {/* Main Header */}
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
                    <span>support@example.com</span>
                  </li>
                  <li className="flex-three">
                    <i className="icon-phone" />
                    <span>684 555-0102 490</span>
                  </li>
                </ul>
              </div>
              <div className="header-top-left flex-two">
                <a href="contact-us.html" className="booking">
                  <i className="icon-19" />
                  <span>Booking Now</span>
                </a>
                <div className="follow-social flex-two">
                  <span>Follow Us :</span>
                  <ul className="flex-two">
                    <li><a href="#"><i className="icon-icon-2" /></a></li>
                    <li><a href="#"><i className="icon-icon_03" /></a></li>
                    <li><a href="#"><i className="icon-x" /></a></li>
                    <li><a href="#"><i className="icon-icon" /></a></li>
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
                        <a href="index.html">
                          <img src="assets/images/logo.png" alt="Logo" />
                        </a>
                      </div>
                    </div>
                    <div className="nav-outer flex align-center">
                      {/* Main Menu */}
                      <nav className="main-menu show navbar-expand-md">
                        <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                          <ul className="navigation clearfix">
                            <li className="dropdown2">
                              <a href="#">Home</a>
                              <ul>
                                <li><a href="index.html">Home Page 01</a></li>
                                <li><a href="home2.html">Home Page 02</a></li>
                                <li><a href="home3.html">Home Page 03</a></li>
                                <li><a href="home4.html">Home Page 04</a></li>
                                <li><a href="home5.html">Home Page 05</a></li>
                              </ul>
                            </li>
                            <li className="dropdown2">
                              <a href="#">Tour</a>
                              <ul>
                                <li><a href="archieve-tour.html">Archieve tour</a>
                                </li>
                                <li><a href="tour-package-v2.html">Tour left sidebar</a>
                                </li>
                                <li><a href="tour-package-v4.html">Tour package </a>
                                </li>
                                <li><a href="tour-single.html">Tour Single </a>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown2"><a href="#">Destination</a>
                              <ul>
                                <li><a href="tour-destination-v1.html">Destination
                                    V1</a></li>
                                <li><a href="tour-destination-v2.html">Destination
                                    V2</a></li>
                                <li><a href="tour-destination-v3.html">Destination
                                    V3</a></li>
                                <li><a href="single-destination.html">Destination
                                    Single</a></li>
                              </ul>
                            </li>
                            <li className="dropdown2 "><a href="#">Blog</a>
                              <ul>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="blog-details.html">Blog Detail</a></li>
                              </ul>
                            </li>
                            <li className="dropdown2 current"><a href="#">Pages</a>
                              <ul>
                                <li><a href="about-us.html">About Us</a></li>
                                <li className="current"><a href="team.html">Team member</a>
                                </li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="terms-condition.html">Terms &amp; Condition</a>
                                </li>
                                <li><a href="help-center.html">Help center</a></li>
                              </ul>
                            </li>
                            <li className="dropdown2 "><a href="#">Dashboard</a>
                              <ul>
                                <li><a href="dashboard.html">Dashboard</a></li>
                                <li><a href="my-booking.html">My booking</a></li>
                                <li><a href="my-listing.html">My Listing</a></li>
                                <li><a href="add-tour.html">Add Tour</a></li>
                                <li><a href="my-favorite.html">My Favorites</a></li>
                                <li><a href="my-profile.html">My profile</a></li>
                              </ul>
                            </li>
                            <li><a href="contact-us.html">Contact</a></li>
                          </ul>
                        </div>
                      </nav>
                      {/* Main Menu End*/}
                    </div>
                    <div className="header-account flex align-center">
                      <div className="language">
                        <div className="nice-select" tabIndex={0}>
                          <img src="./assets/images/page/language.svg" alt /><span className="current">English</span>
                          <ul className="list">
                            <li data-value className="option selected"><img src="./assets/images/page/language.svg" alt />English
                            </li>
                            <li data-value="Vietnam" className="option"><img src="./assets/images/page/language.svg" alt />Vietnam
                            </li>
                            <li data-value="German" className="option"><img src="./assets/images/page/language.svg" alt />German
                            </li>
                            <li data-value="Russian" className="option"><img src="./assets/images/page/language.svg" alt />Russian
                            </li>
                            <li data-value="Canada" className="option"><img src="./assets/images/page/language.svg" alt />Canada
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="currency">
                        <div className="nice-select" tabIndex={0}>
                          <span className="current">USD</span>
                          <ul className="list">
                            <li data-value className="option selected">USD</li>
                            <li data-value="vnd" className="option">VND</li>
                            <li data-value="ero" className="option">ERO</li>
                          </ul>
                        </div>
                      </div>
                      <div className="search-mobie relative">
                        <div className="dropdown">
                          <a type="button" className="show-search" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="icon-Vector5" />
                          </a>
                          <ul className="dropdown-menu top-search">
                            <form action="/" id="search-bar-widget">
                              <input type="text" placeholder="Search here..." />
                              <button type="button"><i className="icon-search-2" /></button>
                            </form>
                          </ul>
                        </div> 
                      </div>
                      <div className="register">
                        <ul className="flex align-center">
                          <li className>
                            <a href="login.html"><i className="icon-user-1-1" />
                              <span>Sign in</span>
                            </a>
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
        <a href="#" className="header-sidebar flex-three" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          <i className="icon-Bars" />
        </a>
        {/* Mobile Menu  */}
        <div className="close-btn"><span className="icon flaticon-cancel-1" /></div>
        <div className="mobile-menu">
          <div className="menu-backdrop" />
          <nav className="menu-box">
            <div className="nav-logo"><a href="index.html">
                <img src="assets/images/logo2.png" alt /></a></div>
            <div className="bottom-canvas">
              <div className="menu-outer">
              </div>
            </div>
          </nav>
        </div>
        {/* End Mobile Menu */}
      </header>
      {/* End Main Header */}
      <main id="main">
        <section className="breadcumb-section">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-12 center z-index1">
                <h1 className="title">Team Page</h1>
                <ul className="breadcumb-list flex-five">
                  <li><a href="index.html">Home</a></li>
                  <li><span>Team Page</span></li>
                </ul>
                <img className="bcrumb-ab" src="./assets/images/page/mask-bcrumb.png" alt />
              </div>
            </div>
          </div>
        </section>
        <section className="team-member-page pd-main">
          <div className="tf-container">
            <div className="row mb-40">
              <div className="col-lg-12">
                <div className="center m0-auto w-text-heading">
                  <span className="sub-title-heading text-main font-yes fs-28-46">Populer
                    Activities</span>
                  <h2 className="title-heading ">meet our experienced <span className="text-main font-yes">Team</span> people</h2>
                </div>
              </div>
            </div>
            <div className="team-member-grid">
              <div className="tf-widget-team">
                <div className="team-image mb-15">
                  <img src="./assets/images/team/team1.jpg" alt />
                  <ul className="social-team">
                    <li>
                      <a href="#">
                        <i className="icon-9" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-5" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content center">
                  <p className="job">SR. Tour Manager</p>
                  <h4 className="name"><a href="#">Leslie Alexander</a></h4>
                </div>
              </div>
              <div className="tf-widget-team">
                <div className="team-image mb-15">
                  <img src="./assets/images/team/team2.jpg" alt />
                  <ul className="social-team">
                    <li>
                      <a href="#">
                        <i className="icon-9" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-5" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content center">
                  <p className="job">SR. Tour Manager</p>
                  <h4 className="name"><a href="#">Leslie Alexander</a></h4>
                </div>
              </div>
              <div className="tf-widget-team">
                <div className="team-image mb-15">
                  <img src="./assets/images/team/team3.jpg" alt />
                  <ul className="social-team">
                    <li>
                      <a href="#">
                        <i className="icon-9" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-5" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content center">
                  <p className="job">SR. Tour Manager</p>
                  <h4 className="name"><a href="#">Leslie Alexander</a></h4>
                </div>
              </div>
              <div className="tf-widget-team">
                <div className="team-image mb-15">
                  <img src="./assets/images/team/team4.jpg" alt />
                  <ul className="social-team">
                    <li>
                      <a href="#">
                        <i className="icon-9" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-5" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content center">
                  <p className="job">SR. Tour Manager</p>
                  <h4 className="name"><a href="#">Leslie Alexander</a></h4>
                </div>
              </div>
              <div className="tf-widget-team">
                <div className="team-image mb-15">
                  <img src="./assets/images/team/team5.jpg" alt />
                  <ul className="social-team">
                    <li>
                      <a href="#">
                        <i className="icon-9" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-5" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content center">
                  <p className="job">SR. Tour Manager</p>
                  <h4 className="name"><a href="#">Leslie Alexander</a></h4>
                </div>
              </div>
              <div className="tf-widget-team">
                <div className="team-image mb-15">
                  <img src="./assets/images/team/team6.jpg" alt />
                  <ul className="social-team">
                    <li>
                      <a href="#">
                        <i className="icon-9" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-5" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content center">
                  <p className="job">SR. Tour Manager</p>
                  <h4 className="name"><a href="#">Leslie Alexander</a></h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="brand-logo-widget bg-4">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-12">
                <div className="swiper brand-logo overflow-hidden">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img src="./assets/images/page/brand-logo.png" alt />
                    </div>
                    <div className="swiper-slide">
                      <img src="./assets/images/page/brand-logo.png" alt />
                    </div>
                    <div className="swiper-slide">
                      <img src="./assets/images/page/brand-logo.png" alt />
                    </div>
                    <div className="swiper-slide">
                      <img src="./assets/images/page/brand-logo.png" alt />
                    </div>
                    <div className="swiper-slide">
                      <img src="./assets/images/page/brand-logo.png" alt />
                    </div>
                    <div className="swiper-slide">
                      <img src="./assets/images/page/brand-logo.png" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb--93 bg-1">
          <div className="tf-container">
            <div className="callt-to-action flex-two z-index3 relative">
              <div className="callt-to-action-content flex-three">
                <div className="image">
                  <img src="./assets/images/page/ready.png" alt="Image" />
                </div>
                <div className="content">
                  <h2 className="title-call">Ready to adventure and enjoy natural</h2>
                  <p className="des">Lorem ipsum dolor sit amet, consectetur notted adipisicin</p>
                </div>
              </div>
              <img src="./assets/images/page/vector4.png" alt className="shape-ab" />
              <div className="callt-to-action-button">
                <a href="#" className="get-call">Let,s get started</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer footer-style1">
        <div className="tf-container">
          <div className="footer-main">
            <div className="footer-logo">
              <div className="logo-footer">
                <img src="./assets/images/logo2.png" alt />
              </div>
              <p className="des-footer">The world’s first and largest digital market
                for crypto collectibles and non-fungible
              </p>
              <ul className="footer-info">
                <li className="flex-three">
                  <i className="icon-noun-mail-5780740-1" />
                  <p>Info@webmail.com</p>
                </li>
                <li className="flex-three">
                  <i className="icon-Group-9" />
                  <p>684 555-0102 490</p>
                </li>
                <li className="flex-three">
                  <i className="icon-Layer-19" />
                  <p>6391 Elgin St. Celina, NYC 10299</p>
                </li>
              </ul>
            </div>
            <div className="footer-service">
              <h5 className="title">Services Req</h5>
              <ul className="footer-menu">
                <li>
                  <a href="about-us.html">About Us</a>
                </li>
                <li>
                  <a href="gallery.html">Gallery</a>
                </li>
                <li>
                  <a href="team.html">Our Team</a>
                </li>
                <li>
                  <a href="blog.html">Blog Insights</a>
                </li>
                <li>
                  <a href="contact-us.html">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-gallery">
              <h5 className="title">Gallery</h5>
              <div className="gallery-img">
                <a href="./assets/images/gallery/gl1.jpg" data-fancybox="gallery">
                  <img src="./assets/images/gallery/gl1.jpg" alt="image gallery" />
                </a>
                <a href="./assets/images/gallery/gl2.jpg" data-fancybox="gallery">
                  <img src="./assets/images/gallery/gl2.jpg" alt="image gallery" />
                </a>
                <a href="./assets/images/gallery/gl3.jpg" data-fancybox="gallery">
                  <img src="./assets/images/gallery/gl3.jpg" alt="image gallery" />
                </a>
                <a href="./assets/images/gallery/gl4.jpg" data-fancybox="gallery">
                  <img src="./assets/images/gallery/gl4.jpg" alt="image gallery" />
                </a>
                <a href="./assets/images/gallery/gl5.jpg" data-fancybox="gallery">
                  <img src="./assets/images/gallery/gl5.jpg" alt="image gallery" />
                </a>
                <a href="./assets/images/gallery/gl6.jpg" data-fancybox="gallery">
                  <img src="./assets/images/gallery/gl6.jpg" alt="image gallery" />
                </a>
              </div>
            </div>
            <div className="footer-newsletter">
              <h5 className="title">Newsletter</h5>
              <form action="/" id="footer-form">
                <div className="input-wrap flex-three">
                  <input type="email" placeholder="Enter Email Adress" />
                  <button type="submit"><i className="icon-paper-plane" /></button>
                </div>
                <div className="check-form flex-three">
                  <i className="icon-Vector-121" />
                  <p>I agree to all your terms and policies</p>
                </div>
              </form>
              <ul className="social-ft flex-three">
                <li>
                  <a href="#">
                    <i className="icon-icon-2" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-x" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-8" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-2" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row footer-bottom">
            <div className="col-md-6">
              <p className="copy-right">Copyright © 2024 by Themesflat. All Rights Reserved</p>
            </div>
            <div className="col-md-6">
              <ul className="social flex-six">
                <li>
                  <a href="#">
                    <i className="icon-icon-2" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-x" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-icon_03" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-2" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* Bottom */}
    </div>
    {/* /#page */}
  </div>
  {/* Modal Popup Bid */}
  <a id="scroll-top" className="button-go" />
  <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight">
    <div className="offcanvas-header">
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body">
      <div className="logo-canvas">
        <img src="./assets/images/logo.png" alt="image" />
      </div>
      <p className="des">The world’s first and largest digital market
        for crypto collectibles and non-fungible
      </p>
      <ul className="canvas-info">
        <li className="flex-three">
          <i className="icon-noun-mail-5780740-1" />
          <p>Info@webmail.com</p>
        </li>
        <li className="flex-three">
          <i className="icon-Group-9" />
          <p>684 555-0102 490</p>
        </li>
        <li className="flex-three">
          <i className="icon-Layer-19" />
          <p>6391 Elgin St. Celina, NYC 10299</p>
        </li>
      </ul>
      <ul className="social flex-three">
        <li>
          <a href="#">
            <i className="icon-icon-2" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="icon-x" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="icon-8" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="icon-6" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

  )
}

export default TeamMember