import React from 'react'
import Header from '../pages/Layouts/Header'

function Dashboard() {
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
            <li className="active">
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
            <li>
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
              <h3 className="title">Dashboard</h3>
              <p className="des">There are many variations of passages of Lorem Ipsum</p>
            </div>
            <div className="counter-grid-dashboard mb-70">
              <div className="counter-dashboard flex-three tf-countto">
                <div className="icon flex-five">
                  <i className="icon-earnings-1" />
                </div>
                <div className="content">
                  <span>Total Earning</span>
                  <div className="number-counter money" data-to={43216} data-speed={2000} data-waypoint-active="yes">43216</div>
                </div>
              </div>
              <div className="counter-dashboard flex-three tf-countto">
                <div className="icon flex-five">
                  <i className="icon-heart-1" />
                </div>
                <div className="content">
                  <span>My Wishlist</span>
                  <div className="number-counter plus" data-to={2351} data-speed={2000} data-waypoint-active="yes">2351</div>
                </div>
              </div>
              <div className="counter-dashboard flex-three tf-countto">
                <div className="icon flex-five">
                  <i className="icon-Group-1000003085" />
                </div>
                <div className="content">
                  <span>Total Listing</span>
                  <div className="number-counter" data-to={43216} data-speed={2000} data-waypoint-active="yes">43216</div>
                </div>
              </div>
              <div className="counter-dashboard flex-three tf-countto">
                <div className="icon flex-five">
                  <i className="icon-feedback" />
                </div>
                <div className="content">
                  <span>Total Listing</span>
                  <div className="number-counter plus" data-to={2351} data-speed={2000} data-waypoint-active="yes">2351</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-8 col-xl-12">
                <div className="page-insight">
                  {/* chart */}
                  <div className="wg-box">
                    <div className="flex-two">
                      <h5>Total page view</h5>
                      <div className="group-select">
                        <div className="nice-select" tabIndex={0}>
                          <span className="current">This Week</span>
                          <ul className="list">
                            <li data-value className="option selected">This Week</li>
                            <li data-value="Last day" className="option">Last Day</li>
                            <li data-value="Last Week" className="option">Last Week</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div id="line-chart-1" />
                  </div>
                  {/* /chart */}
                </div>
              </div>
              <div className="col-xxl-4 col-xl-12">
                <div className="tfcl-card dashboard-message mb-25">
                  <h4 className="title mb-30">What,s New?</h4>
                  <ul className="message">
                    <li className="flex-three">
                      <div className="icon">
                        <i className="icon-Group4" />
                      </div>
                      <p>Congratulation Your <span className="text-main">23</span> Listing has been
                        approved Today</p>
                    </li>
                    <li className="flex-three">
                      <div className="icon">
                        <i className="icon-Vector-131" />
                      </div>
                      <p>Someone is saved your listing</p>
                    </li>
                    <li className="flex-three">
                      <div className="icon">
                        <div className="icon-Vector-141" />
                      </div>
                      <p>You have unread <span className="text-main">21</span> Message</p>
                    </li>
                    <li className="flex-three">
                      <div className="icon">
                        <i className="icon-Vector-131" />
                      </div>
                      <p>Congratulation Your <span className="text-main">22</span> Listing has
                        been</p>
                    </li>
                    <li className="flex-three">
                      <div className="icon">
                        <i className="icon-Vector-131" />
                      </div>
                      <p>Mehedii Added Favorites Your listing “Mercedez Benz 2.3”</p>
                    </li>
                    <li className="flex-three">
                      <div className="icon">
                        <i className="icon-Vector-141" />
                      </div>
                      <p>You have unread <span className="text-main">21</span> Message</p>
                    </li>
                    <li className="flex-three">
                      <div className="icon">
                        <i className="icon-Vector-131" />
                      </div>
                      <p>Congratulation Your <span className="text-main">22</span> Listing has been
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="tfcl-card dashboard-reviews">
                  <h4 className="title mb-30">Recent Reviews</h4>
                  <ul>
                    <li className="comment-by-user flex-three">
                      <div className="group-author">
                        <img src="./assets/images/avata/avt-review.jpg" alt="image" />
                      </div>
                      <div className="content">
                        <div className="group-name flex-one">
                          <div className="review-name">Rohan De Spond</div>
                          <div className="rating-wrap">
                            <i className="icon-Star" />
                            <i className="icon-Star" />
                            <i className="icon-Star" />
                            <i className="icon-Star" />
                            <i className="icon-Star" />
                          </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, con covered many vulputate ves
                        </p>
                      </div>
                    </li>
                    <li className="comment-by-user flex-three">
                      <div className="group-author">
                        <img src="./assets/images/avata/avt-review2.jpg" alt="image" />
                      </div>
                      <div className="content">
                        <div className="group-name flex-one">
                          <div className="review-name">Mehedii. Has</div>
                          <div className="rating-wrap">
                            <i className="icon-Star" />
                            <i className="icon-Star" />
                            <i className="icon-Star" />
                            <i className="icon-Star" />
                            <i className="icon-Star" />
                          </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, con covered many vulputate ves
                        </p>
                      </div>
                    </li>
                    <li className="comment-by-user flex-three">
                      <div className="group-author">
                        <img src="./assets/images/avata/avt-review.jpg" alt="image" />
                      </div>
                      <div className="content">
                        <div className="group-name flex-one">
                          <div className="review-name">Rohan De Spond</div>
                          <div className="rating-wrap">
                            <i className="icon-Star" />
                            <i className="icon-Star" />
                            <i className="icon-Star" />
                            <i className="icon-Star" />
                            <i className="icon-Star" />
                          </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, con covered many vulputate ves
                        </p>
                      </div>
                    </li>
                    <li className="comment-by-user flex-three">
                      <div className="group-author">
                        <img src="./assets/images/avata/avt-review3.jpg" alt="image" />
                      </div>
                      <div className="content">
                        <div className="group-name flex-one">
                          <div className="review-name">Mehedii. Has</div>
                          <div className="rating-wrap">
                            <i className="icon-Star" />
                            <i className="icon-Star" />
                            <i className="icon-Star" />
                            <i className="icon-Star" />
                            <i className="icon-Star" />
                          </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, con covered many vulputate ves
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer footer-dashboard">
          <div className="tf-container full">
            <div className="row">
              <div className="col-xl-6">
                <p className="text-white">Made with ❤️ by Themesflat. - Powered by Theme</p>
              </div>
              <div className="col-xl-6">
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
</div>

  )
}

export default Dashboard