import React from 'react'
import Header from '../pages/Layouts/Header'

function MyFavorite() {
  return (
  <div>
  <div id="wrapper">
    <div id="pagee" className="clearfix">
      <div className="sidebar-dashboard">
        <div className="db-logo">
          <a href="index.html"><img src="assets/images/favico.png" alt="Logo" /><span>Vitour</span></a>
        </div>
        <div className="db-menu">
          <ul>
            <li>
              <a href="dashboard.html">
                <i className="icon-Vector-9" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="my-booking.html">
                <i className="icon-Layer-2" />
                <span>My Booking</span>
              </a>
            </li>
            <li>
              <a href="my-listing.html">
                <i className="icon-Group-81" />
                <span>My Listing</span>
              </a>
            </li>
            <li>
              <a href="add-tour.html">
                <i className="icon-Group-91" />
                <span>Add Tour</span>
              </a>
            </li>
            <li className="active">
              <a href="my-favorite.html">
                <i className="icon-Vector-10" />
                <span>My Favorites</span>
              </a>
            </li>
            <li>
              <a href="my-profile.html">
                <i className="icon-profile-user-1" />
                <span>My Profile</span>
              </a>
            </li>
            <li>
              <a href="login.html">
                <i className="icon-turn-off-1" />
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="has-dashboard">
        {/* Main Header */}
       <Header/>
        {/* End Main Header */}
        <main id="main">
          <section className="profile-dashboard">
            <div className="inner-header mb-40">
              <h3 className="title">My Favorites</h3>
              <p className="des">There are many variations of passages of Lorem Ipsum</p>
            </div>
            <div className="favorite-wrap mb-60">
              <div className="favorite-grid">
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
                    <h3 className="title-tour-list"><a href="tour-single.html">6 nights From Moscow</a>
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
                    <img src="./assets/images/travel-list/1.jpg" alt="Image Listing" />
                  </a>
                  <div className="tour-listing-content">
                    <span className="map"><i className="icon-Vector4" />United States USA</span>
                    <h3 className="title-tour-list"><a href="tour-single.html">6 nights From Moscow</a>
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
                    <img src="./assets/images/travel-list/1.jpg" alt="Image Listing" />
                  </a>
                  <div className="tour-listing-content">
                    <span className="map"><i className="icon-Vector4" />United States USA</span>
                    <h3 className="title-tour-list"><a href="tour-single.html">6 nights From Moscow</a>
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
                    <img src="./assets/images/travel-list/1.jpg" alt="Image Listing" />
                  </a>
                  <div className="tour-listing-content">
                    <span className="map"><i className="icon-Vector4" />United States USA</span>
                    <h3 className="title-tour-list"><a href="tour-single.html">6 nights From Moscow</a>
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
                    <img src="./assets/images/travel-list/1.jpg" alt="Image Listing" />
                  </a>
                  <div className="tour-listing-content">
                    <span className="map"><i className="icon-Vector4" />United States USA</span>
                    <h3 className="title-tour-list"><a href="tour-single.html">6 nights From Moscow</a>
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
                    <img src="./assets/images/travel-list/1.jpg" alt="Image Listing" />
                  </a>
                  <div className="tour-listing-content">
                    <span className="map"><i className="icon-Vector4" />United States USA</span>
                    <h3 className="title-tour-list"><a href="tour-single.html">6 nights From Moscow</a>
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
                    <img src="./assets/images/travel-list/1.jpg" alt="Image Listing" />
                  </a>
                  <div className="tour-listing-content">
                    <span className="map"><i className="icon-Vector4" />United States USA</span>
                    <h3 className="title-tour-list"><a href="tour-single.html">6 nights From Moscow</a>
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
                    <img src="./assets/images/travel-list/1.jpg" alt="Image Listing" />
                  </a>
                  <div className="tour-listing-content">
                    <span className="map"><i className="icon-Vector4" />United States USA</span>
                    <h3 className="title-tour-list"><a href="tour-single.html">6 nights From Moscow</a>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 ">
                <ul className="tf-pagination flex-five">
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
          </section>
        </main>
        <footer className="footer footer-dashboard">
          <div className="tf-container full">
            <div className="row">
              <div className="col-lg-6">
                <p className="text-white">Made with ❤️ by Themesflat. - Powered by Theme</p>
              </div>
              <div className="col-lg-6">
                <ul className="menu-footer flex-six">
                  <li>
                    <a href="#">Privacy &amp; Policy</a>
                  </li>
                  <li>
                    <a href="#">Licensing</a>
                  </li>
                  <li>
                    <a href="#">Instruction</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        {/* Bottom */}
      </div>
    </div>
    {/* /#page */}
  </div>
  {/* Modal Popup Bid */}
  <a id="scroll-top" className="button-go" />
  {/* Modal search*/}
  <div className="modal search-mobie fade" id="exampleModal" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        <div className="modal-body">
          <form action="/" className="search-form-mobie">
            <div className="search">
              <i className="icon-circle2017" />
              <input type="search" placeholder="Search Travel" className="search-input" autoComplete="off" />
              <button type="button">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body">
      ...
    </div>
  </div>
</div>
  )
}

export default MyFavorite