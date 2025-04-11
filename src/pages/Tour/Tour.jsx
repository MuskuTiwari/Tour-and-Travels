import React from 'react'

function Tour() {
  return (
<div>
  &lt;&gt;
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
                            <li className="dropdown2 current">
                              <a href="#">Tour</a>
                              <ul>
                                <li><a href="archieve-tour.html">Archieve tour</a>
                                </li>
                                <li className="current"><a href="tour-package-v2.html">Tour
                                    left sidebar</a>
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
                            <li className="dropdown2"><a href="#">Pages</a>
                              <ul>
                                <li><a href="about-us.html">About Us</a></li>
                                <li><a href="team.html">Team member</a></li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="terms-condition.html">Terms &amp; Condition</a>
                                </li>
                                <li><a href="help-center.html">Help center</a></li>
                              </ul>
                            </li>
                            <li className="dropdown2"><a href="#">Dashboard</a>
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
                <h1 className="title">Tour Package v2</h1>
                <ul className="breadcumb-list flex-five">
                  <li><a href="index.html">Home</a></li>
                  <li><span>Tour Package</span></li>
                </ul>
                <img className="bcrumb-ab" src="./assets/images/page/mask-bcrumb.png" alt />
              </div>
            </div>
          </div>
        </section>
        {/* Widget Select Form */}
        <div className="mt--82 z-index3 relative">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-12">
                <div className="search-form-widget-slider relative">
                  <form action="/" id="search-form-slider">
                    <div className="flex wd-search">
                      <div className="form-group flex">
                        <i className="icon-18" />
                        <div className="search-bar-group">
                          <label>Destination</label>
                          <div className="nice-select" tabIndex={0}>
                            <span className="current">Melborn ,Australia</span>
                            <ul className="list">
                              <li data-value className="option selected">Melborn ,Australia
                              </li>
                              <li data-value="hanoi" className="option">HaNoi ,Vietnam</li>
                              <li data-value="tolyo" className="option">Tokyo , Janpan</li>
                              <li data-value="korea" className="option">Seoul , Korea</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="form-group flex">
                        <i className="icon-hiking-1-1 " />
                        <div className="search-bar-group">
                          <label>Type</label>
                          <div className="nice-select" tabIndex={0}>
                            <span className="current">Booking Type</span>
                            <ul className="list">
                              <li data-value className="option selected">Booking Type</li>
                              <li data-value="booking" className="option">Booking Type</li>
                              <li data-value="booking" className="option">Booking Type</li>
                              <li data-value="booking" className="option">Booking Type</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="form-group flex">
                        <i className=" icon-time-left " />
                        <div className="search-bar-group">
                          <label>Duration</label>
                          <div className="nice-select" tabIndex={0}>
                            <span className="current">2-4 days tour</span>
                            <ul className="list">
                              <li data-value className="option selected">2-4 days tour</li>
                              <li data-value="booking" className="option">3-6 days tour</li>
                              <li data-value="booking" className="option">4-8 days tour</li>
                              <li data-value="booking" className="option">5-10 days tour</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="form-group flex">
                        <i className="icon-user" />
                        <div className="search-bar-group">
                          <label>Guests</label>
                          <input type="text" defaultValue={0} />
                        </div>
                      </div>
                      <div className="form-group flex-two">
                        <div className="icon-icon-filter">
                          <i className="icon-14" />
                        </div>
                        <a href="#" className="btn-search"><i className="icon-Vector5" />Search</a>
                      </div>
                    </div>
                    <div className="wd-search-form">
                      <div className="input-group-grid">
                        <fieldset className="group-select relative ">
                          <label>Filter By Price</label>
                          <div className="widget widget-price ">
                            <div id="slider-range" />
                            <div className="slider-labels">
                              <div>
                                <input type="hidden" name="min-value" defaultValue />
                                <input type="hidden" name="max-value" defaultValue />
                              </div>
                              <div className="caption flex-three">
                                <p className="price-range">Price: </p>
                                <div className="number-range">
                                  <span id="slider-range-value1" />
                                  <span id="slider-range-value2" />
                                </div>
                              </div>
                            </div>
                          </div>{/* /.widget_price */}
                        </fieldset>
                        <fieldset className="group-select relative input-npd ">
                          <div className="search-bar-group relative">
                            <label>0</label>
                            <div className="nice-select" tabIndex={0}>
                              <span className="current">English</span>
                              <ul className="list">
                                <li data-value className="option selected focus">Language
                                </li>
                                <li data-value="language1" className="option">Japan</li>
                                <li data-value="language2" className="option">Vietnames</li>
                                <li data-value="language3" className="option">Korea</li>
                              </ul>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset className="group-select relative input-npd ">
                          <div className="search-bar-group relative">
                            <label>Any</label>
                            <div className="nice-select" tabIndex={0}>
                              <span className="current">Month</span>
                              <ul className="list">
                                <li data-value className="option selected focus">Month
                                </li>
                                <li data-value="month1" className="option">1 Month</li>
                                <li data-value="month2" className="option">2 Month</li>
                                <li data-value="month3" className="option">3 Month</li>
                              </ul>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset className="group-select relative input-npd">
                          <div className="search-bar-group relative">
                            <label>Any</label>
                            <div className="nice-select" tabIndex={0}>
                              <span className="current">Duration</span>
                              <ul className="list">
                                <li data-value className="option selected focus">Duration
                                </li>
                                <li data-value="duration1" className="option">10-15 day</li>
                                <li data-value="duration2" className="option">15-30 day</li>
                                <li data-value="duration3" className="option">20-30 day</li>
                              </ul>
                            </div>
                          </div>
                        </fieldset>
                        <div className="group-check-box-wrap">
                          <div className="checkbox">
                            <input id="check4" type="checkbox" name="check" defaultValue="check" />
                            <label htmlFor="check4">Accepts Credit Cards</label>
                          </div>
                          <div className="checkbox">
                            <input id="check5" type="checkbox" name="check" defaultValue="check" />
                            <label htmlFor="check5">Car Parking</label>
                          </div>
                        </div>
                        <div className="group-check-box-wrap">
                          <div className="checkbox">
                            <input id="check6" type="checkbox" name="check" defaultValue="check" />
                            <label htmlFor="check6">Free Coupons</label>
                          </div>
                          <div className="checkbox">
                            <input id="check7" type="checkbox" name="check" defaultValue="check" />
                            <label htmlFor="check7">Laundry Service</label>
                          </div>
                        </div>
                        <div className="group-check-box-wrap">
                          <div className="checkbox">
                            <input id="check8" type="checkbox" name="check" defaultValue="check" />
                            <label htmlFor="check8">Outdoor Seating</label>
                          </div>
                          <div className="checkbox">
                            <input id="check9" type="checkbox" name="check" defaultValue="check" />
                            <label htmlFor="check9">Reservations</label>
                          </div>
                        </div>
                        <div className="group-check-box-wrap">
                          <div className="checkbox">
                            <input id="check10" type="checkbox" name="check" defaultValue="check" />
                            <label htmlFor="check10">Restaurant</label>
                          </div>
                          <div className="checkbox">
                            <input id="check11" type="checkbox" name="check" defaultValue="check" />
                            <label htmlFor="check11">Smoking Allowed</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Widget Select Form */}
        {/* Widget archieve tour */}
        <section className="archieve-tour">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-4">
                <form action="/" className="sider-bar-tour-package">
                  <div className="widget-filter mb-40">
                    <h6 className="title-tour">Search by Filter</h6>
                    <div className="group-select-wrap">
                      <fieldset className="group-select relative mb-22">
                        <i className="icon-Vector-8" />
                        <div className="search-bar-group relative">
                          <label>Destination</label>
                          <div className="nice-select" tabIndex={0}>
                            <span className="current">Location</span>
                            <ul className="list">
                              <li data-value className="option selected focus">Tokyo</li>
                              <li data-value="hongkong" className="option">Hong Kong</li>
                              <li data-value="taiwan" className="option">Taiwan</li>
                              <li data-value="hanoi" className="option">Ha Noi</li>
                              <li data-value="seoul" className="option">Seoul</li>
                            </ul>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset className="group-select relative mb-22">
                        <i className="icon-Vector-22" />
                        <div className="search-bar-group relative">
                          <label>Activities</label>
                          <div className="nice-select" tabIndex={0}>
                            <span className="current">Booking Type</span>
                            <ul className="list">
                              <li data-value className="option selected focus">Booking Type
                              </li>
                              <li data-value="4seat" className="option">4 Seat</li>
                              <li data-value="7seat" className="option">7 Seat</li>
                              <li data-value="12seat" className="option">12 Seat</li>
                              <li data-value="32seat" className="option">32 Seat</li>
                            </ul>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset className="group-select relative mb-22">
                        <i className="icon-Group-111" />
                        <div className="search-bar-group relative">
                          <label>Date</label>
                          <div className="nice-select" tabIndex={0}>
                            <span className="current">Date From</span>
                            <ul className="list">
                              <li data-value className="option selected focus">Date From
                              </li>
                              <li data-value="3-5day" className="option">3-5 day</li>
                              <li data-value="5-7day" className="option">5-7 day</li>
                              <li data-value="7-12day" className="option">7-12 day</li>
                            </ul>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset className="group-select relative mb-22">
                        <i className="icon-user" />
                        <div className="search-bar-group relative">
                          <label>0</label>
                          <div className="nice-select" tabIndex={0}>
                            <span className="current">Guests</span>
                            <ul className="list">
                              <li data-value className="option selected focus">Guests</li>
                              <li data-value="guests5" className="option">5 Guests</li>
                              <li data-value="guests10" className="option">10 Guests</li>
                              <li data-value="guests15" className="option">15 Guests</li>
                            </ul>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset className="group-select relative mb-40">
                        <h6 className="title-tour">Filter By Price</h6>
                        <div className="widget widget-price ">
                          <div id="slider-range2" />
                          <div className="slider-labels">
                            <div>
                              <input type="hidden" name="min-value2" defaultValue />
                              <input type="hidden" name="max-value2" defaultValue />
                            </div>
                            <div className="caption flex-three">
                              <p className="price-range">Price: </p>
                              <div className="number-range">
                                <span id="slider-range-value01" />
                                <span id="slider-range-value02" />
                              </div>
                            </div>
                          </div>
                        </div>{/* /.widget_price */}
                      </fieldset>
                      <fieldset className="group-select relative input-npd mb-22">
                        <div className="search-bar-group relative">
                          <label>0</label>
                          <div className="nice-select" tabIndex={0}>
                            <span className="current">English</span>
                            <ul className="list">
                              <li data-value className="option selected focus">Language
                              </li>
                              <li data-value="chinese" className="option">Chinese</li>
                              <li data-value="japanese" className="option">Japanese</li>
                              <li data-value="russian" className="option">Russian</li>
                            </ul>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset className="group-select relative input-npd mb-22">
                        <div className="search-bar-group relative">
                          <label>Any</label>
                          <div className="nice-select" tabIndex={0}>
                            <span className="current">Month</span>
                            <ul className="list">
                              <li data-value className="option selected focus">Month</li>
                              <li data-value="month1" className="option">1 Month</li>
                              <li data-value="month2" className="option">2 Month</li>
                              <li data-value="month3" className="option">3 Month</li>
                            </ul>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset className="group-select relative input-npd">
                        <div className="search-bar-group relative">
                          <label>Any</label>
                          <div className="nice-select" tabIndex={0}>
                            <span className="current">Duration</span>
                            <ul className="list">
                              <li data-value className="option selected focus">Duration
                              </li>
                              <li data-value="duration15" className="option">15 day</li>
                              <li data-value="duration20" className="option">20 day</li>
                              <li data-value="duration30" className="option">30 day</li>
                            </ul>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                  <div className="widget-filter mb-40">
                    <h6 className="title-tour">Search by Filter</h6>
                    <div className="group-check-box-wrap">
                      <div className="checkbox">
                        <input id="check" type="checkbox" name="check" defaultValue="check" />
                        <label htmlFor="check">10+</label>
                      </div>
                      <div className="checkbox">
                        <input id="check1" type="checkbox" name="check" defaultValue="check" />
                        <label htmlFor="check1">12+</label>
                      </div>
                      <div className="checkbox">
                        <input id="check2" type="checkbox" name="check" defaultValue="check" />
                        <label htmlFor="check2">15+</label>
                      </div>
                      <div className="checkbox">
                        <input id="check3" type="checkbox" name="check" defaultValue="check" />
                        <label htmlFor="check3">Adults</label>
                      </div>
                    </div>
                  </div>
                  <div className="widget-filter mb-40">
                    <h6 className="title-tour">Search by Filter</h6>
                    <div className="group-check-box-wrap">
                      <div className="checkbox">
                        <input id="check4-bar" type="checkbox" name="check" defaultValue="check" />
                        <label htmlFor="check4-bar">Accepts Credit Cards</label>
                      </div>
                      <div className="checkbox">
                        <input id="check5-bar" type="checkbox" name="check" defaultValue="check" />
                        <label htmlFor="check5-bar">Car Parking</label>
                      </div>
                      <div className="checkbox">
                        <input id="check6-bar" type="checkbox" name="check" defaultValue="check" />
                        <label htmlFor="check6-bar">Free Coupons</label>
                      </div>
                      <div className="checkbox">
                        <input id="check7-bar" type="checkbox" name="check" defaultValue="check" />
                        <label htmlFor="check7-bar">Laundry Service</label>
                      </div>
                      <div className="checkbox">
                        <input id="check8-bar" type="checkbox" name="check" defaultValue="check" />
                        <label htmlFor="check8-bar">Outdoor Seating</label>
                      </div>
                      <div className="checkbox">
                        <input id="check9-bar" type="checkbox" name="check" defaultValue="check" />
                        <label htmlFor="check9-bar">Reservations</label>
                      </div>
                      <div className="checkbox">
                        <input id="check10-bar" type="checkbox" name="check" defaultValue="check" />
                        <label htmlFor="check10-bar">Restaurant</label>
                      </div>
                      <div className="checkbox">
                        <input id="check11-bar" type="checkbox" name="check" defaultValue="check" />
                        <label htmlFor="check11-bar">Smoking Allowed</label>
                      </div>
                    </div>
                  </div>
                  <div className="widget-filter-content">
                    <div className="z-index3 relative">
                      <span className="text-main">This Week only</span>
                      <h4 className="title text-white">Enjoy 50% Off</h4>
                      <p className="text-main">&amp; Free cancelation</p>
                      <a href="#" className="booking-now">Booking Now <i className="icon-Vector2" /></a>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-8 listing-list-car-wrap">
                <form action="/" className="tf-my-listing mb-37">
                  <div className="row align-center">
                    <div className="col-sm-5">
                      <p className="showing">Showing <span className="text-main">12</span> of 21 Results
                      </p>
                    </div>
                    <div className="col-sm-7 group-bar-wrap flex-six">
                      <div className="listing-all-wrap">
                        <div className="flex-three">
                          <div className="group-select-recently">
                            <div className="nice-select" tabIndex={0}>
                              <i className="icon-Vector6" /><span className="current">Price</span>
                              <ul className="list">
                                <li data-value className="option selected focus">Price
                                </li>
                                <li data-value="new" className="option">New</li>
                                <li data-value="Recently Added" className="option">Recently
                                  Added</li>
                              </ul>
                            </div>
                          </div>
                          <div className="toolbar-list">
                            <div className="form-group">
                              <a className="btn-display-listing-grid active">
                                <i className="icon-list" />
                              </a>
                            </div>
                            <div className="form-group">
                              <a className="btn-display-listing-list">
                                <i className="icon-Group-1000001297" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="listing-list-car-grid mb-60">
                  <div className="tour-listing box-sd">
                    <a href="tour-single.html" className="tour-listing-image">
                      <div className="badge-top flex-two">
                        <span className="feature">Featured</span>
                        <div className="badge-media flex-five">
                          <span className="media"><i className="icon-Group-1000002909" />5</span>
                          <span className="media"><i className="icon-Group-1000002910" />2</span>
                        </div>
                      </div>
                      <img src="./assets/images/travel-list/1.jpg" alt="Image Listing" />
                    </a>
                    <div className="tour-listing-content">
                      <span className="map"><i className="icon-Vector4" />United States USA</span>
                      <h3 className="title-tour-list"><a href="tour-single.html">Days and 6 nights
                          From Moscow</a>
                      </h3>
                      <div className="review">
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <span>(1 Review)</span>
                      </div>
                      <div className="icon-box flex-three">
                        <div className="icons flex-three">
                          <i className="icon-time-left" />
                          <span>5 days</span>
                        </div>
                        <div className="icons flex-three">
                          <svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>12 Person</span>
                        </div>
                      </div>
                      <div className="flex-two">
                        <div className="price-box flex-three">
                          <p>From <span className="price-sale">$169.00</span></p>
                          <span className="price">$199.00</span>
                        </div>
                        <div className="icon-bookmark">
                          <i className="icon-Vector-151" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tour-listing box-sd">
                    <a href="tour-single.html" className="tour-listing-image">
                      <div className="badge-top flex-two">
                        <span className="feature">Featured</span>
                        <div className="badge-media flex-five">
                          <span className="media"><i className="icon-Group-1000002909" />5</span>
                          <span className="media"><i className="icon-Group-1000002910" />2</span>
                        </div>
                      </div>
                      <img src="./assets/images/travel-list/2.jpg" alt="Image Listing" />
                    </a>
                    <div className="tour-listing-content">
                      <span className="map"><i className="icon-Vector4" />United States USA</span>
                      <h3 className="title-tour-list"><a href="tour-single.html">Days and 6 nights
                          From Moscow</a>
                      </h3>
                      <div className="review">
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <span>(1 Review)</span>
                      </div>
                      <div className="icon-box flex-three">
                        <div className="icons flex-three">
                          <i className="icon-time-left" />
                          <span>5 days</span>
                        </div>
                        <div className="icons flex-three">
                          <svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>12 Person</span>
                        </div>
                      </div>
                      <div className="flex-two">
                        <div className="price-box flex-three">
                          <p>From <span className="price-sale">$169.00</span></p>
                          <span className="price">$199.00</span>
                        </div>
                        <div className="icon-bookmark">
                          <i className="icon-Vector-151" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tour-listing box-sd">
                    <a href="tour-single.html" className="tour-listing-image">
                      <div className="badge-top flex-two">
                        <span className="feature">Featured</span>
                        <div className="badge-media flex-five">
                          <span className="media"><i className="icon-Group-1000002909" />5</span>
                          <span className="media"><i className="icon-Group-1000002910" />2</span>
                        </div>
                      </div>
                      <img src="./assets/images/travel-list/3.jpg" alt="Image Listing" />
                    </a>
                    <div className="tour-listing-content">
                      <span className="map"><i className="icon-Vector4" />United States USA</span>
                      <h3 className="title-tour-list"><a href="tour-single.html">Days and 6 nights
                          From Moscow</a>
                      </h3>
                      <div className="review">
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <span>(1 Review)</span>
                      </div>
                      <div className="icon-box flex-three">
                        <div className="icons flex-three">
                          <i className="icon-time-left" />
                          <span>5 days</span>
                        </div>
                        <div className="icons flex-three">
                          <svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>12 Person</span>
                        </div>
                      </div>
                      <div className="flex-two">
                        <div className="price-box flex-three">
                          <p>From <span className="price-sale">$169.00</span></p>
                          <span className="price">$199.00</span>
                        </div>
                        <div className="icon-bookmark">
                          <i className="icon-Vector-151" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tour-listing box-sd">
                    <a href="tour-single.html" className="tour-listing-image">
                      <div className="badge-top flex-two">
                        <span className="feature">Featured</span>
                        <div className="badge-media flex-five">
                          <span className="media"><i className="icon-Group-1000002909" />5</span>
                          <span className="media"><i className="icon-Group-1000002910" />2</span>
                        </div>
                      </div>
                      <img src="./assets/images/travel-list/4.jpg" alt="Image Listing" />
                    </a>
                    <div className="tour-listing-content">
                      <span className="map"><i className="icon-Vector4" />United States USA</span>
                      <h3 className="title-tour-list"><a href="tour-single.html">Days and 6 nights
                          From Moscow</a>
                      </h3>
                      <div className="review">
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <span>(1 Review)</span>
                      </div>
                      <div className="icon-box flex-three">
                        <div className="icons flex-three">
                          <i className="icon-time-left" />
                          <span>5 days</span>
                        </div>
                        <div className="icons flex-three">
                          <svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>12 Person</span>
                        </div>
                      </div>
                      <div className="flex-two">
                        <div className="price-box flex-three">
                          <p>From <span className="price-sale">$169.00</span></p>
                          <span className="price">$199.00</span>
                        </div>
                        <div className="icon-bookmark">
                          <i className="icon-Vector-151" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tour-listing box-sd">
                    <a href="tour-single.html" className="tour-listing-image">
                      <div className="badge-top flex-two">
                        <span className="feature">Featured</span>
                        <div className="badge-media flex-five">
                          <span className="media"><i className="icon-Group-1000002909" />5</span>
                          <span className="media"><i className="icon-Group-1000002910" />2</span>
                        </div>
                      </div>
                      <img src="./assets/images/travel-list/5.jpg" alt="Image Listing" />
                    </a>
                    <div className="tour-listing-content">
                      <span className="map"><i className="icon-Vector4" />United States USA</span>
                      <h3 className="title-tour-list"><a href="tour-single.html">Days and 6 nights
                          From Moscow</a>
                      </h3>
                      <div className="review">
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <span>(1 Review)</span>
                      </div>
                      <div className="icon-box flex-three">
                        <div className="icons flex-three">
                          <i className="icon-time-left" />
                          <span>5 days</span>
                        </div>
                        <div className="icons flex-three">
                          <svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>12 Person</span>
                        </div>
                      </div>
                      <div className="flex-two">
                        <div className="price-box flex-three">
                          <p>From <span className="price-sale">$169.00</span></p>
                          <span className="price">$199.00</span>
                        </div>
                        <div className="icon-bookmark">
                          <i className="icon-Vector-151" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tour-listing box-sd">
                    <a href="tour-single.html" className="tour-listing-image">
                      <div className="badge-top flex-two">
                        <span className="feature">Featured</span>
                        <div className="badge-media flex-five">
                          <span className="media"><i className="icon-Group-1000002909" />5</span>
                          <span className="media"><i className="icon-Group-1000002910" />2</span>
                        </div>
                      </div>
                      <img src="./assets/images/travel-list/6.jpg" alt="Image Listing" />
                    </a>
                    <div className="tour-listing-content">
                      <span className="map"><i className="icon-Vector4" />United States USA</span>
                      <h3 className="title-tour-list"><a href="tour-single.html">Days and 6 nights
                          From Moscow</a>
                      </h3>
                      <div className="review">
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <i className="icon-Star" />
                        <span>(1 Review)</span>
                      </div>
                      <div className="icon-box flex-three">
                        <div className="icons flex-three">
                          <i className="icon-time-left" />
                          <span>5 days</span>
                        </div>
                        <div className="icons flex-three">
                          <svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.34766 4.79761C4.34766 2.94013 5.85346 1.43433 7.71094 1.43433C9.56841 1.43433 11.0742 2.94013 11.0742 4.79761C11.0742 6.65508 9.56841 8.16089 7.71094 8.16089C5.85346 8.16089 4.34766 6.65508 4.34766 4.79761Z" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.5977 15.1797H2.46098C1.34827 15.1797 0.558268 14.0954 0.898984 13.0362C1.80408 10.222 4.57804 8.18566 7.69301 8.18566C9.17897 8.18566 10.5566 8.64906 11.6895 9.43922" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17.1035 15.1797V9.02734" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20.1797 12.1035H14.0273" stroke="currentColor" strokeWidth="1.7" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>12 Person</span>
                        </div>
                      </div>
                      <div className="flex-two">
                        <div className="price-box flex-three">
                          <p>From <span className="price-sale">$169.00</span></p>
                          <span className="price">$199.00</span>
                        </div>
                        <div className="icon-bookmark">
                          <i className="icon-Vector-151" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 ">
                    <ul className="tf-pagination flex-three">
                      <li>
                        <a className="pages-link" href="#"> <i className="icon-29" /></a>
                      </li>
                      <li>
                        <a className="pages-link" href="#">1</a>
                      </li>
                      <li className="pages-item active" aria-current="page">
                        <a className="pages-link" href="#">2</a>
                      </li>
                      <li><a className="pages-link" href="#">3</a></li>
                      <li>
                        <a className="pages-link" href="#"><i className=" icon--1" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Widget archieve tour */}
        <section className="mb--93">
          <div className="tf-container">
            <div className="callt-to-action flex-two">
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

export default Tour