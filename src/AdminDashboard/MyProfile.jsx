import React from 'react'

function MyProfile() {
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
            <li>
              <a href="my-favorite.html">
                <i className="icon-Vector-10" />
                <span>My Favorites</span>
              </a>
            </li>
            <li className="active">
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
        <header className="main-header flex">
          {/* Header Lower */}
          <div id="header">
            <div className="header-dashboard">
              <div className="tf-container full">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="inner-container flex justify-space align-center">
                      {/* Logo Box */}
                      <div className="header-search flex-three">
                        <div className="icon-bars">
                          <i className="icon-Vector3" />
                        </div>
                        <form action="/" className="search-dashboard">
                          <i className="icon-Vector5" />
                          <input type="search" placeholder="Search tours" />
                        </form>
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
                                  <li><a href="tour-package-v2.html">Tour left
                                      sidebar</a>
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
                                  <li><a href="terms-condition.html">Terms &amp;
                                      Condition</a></li>
                                  <li><a href="help-center.html">Help center</a></li>
                                </ul>
                              </li>
                              <li className="dropdown2 current"><a href="#">Dashboard</a>
                                <ul>
                                  <li><a href="dashboard.html">Dashboard</a></li>
                                  <li><a href="my-booking.html">My booking</a></li>
                                  <li><a href="my-listing.html">My Listing</a></li>
                                  <li><a href="add-tour.html">Add Tour</a></li>
                                  <li><a href="my-favorite.html">My Favorites</a></li>
                                  <li className="current"><a href="my-profile.html">My
                                      profile</a></li>
                                </ul>
                              </li>
                              <li><a href="contact-us.html">Contact</a></li>
                            </ul>
                          </div>
                        </nav>
                        {/* Main Menu End*/}
                      </div>
                      <div className="header-account flex align-center">
                        <div className="dropdown notification">
                          <a className="icon-notification" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="icon-notification-1" />
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <div className="message-item  flex-three">
                                <div className="image">
                                  <i className="icon-26" />
                                </div>
                                <div>
                                  <div className="body-title">Discount available</div>
                                  <div className="text-tiny">Morbi sapien massa, ultricies at rhoncus at, ullamcorper nec diam</div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="message-item  flex-three">
                                <div className="image">
                                  <i className="icon-26" />
                                </div>
                                <div>
                                  <div className="body-title">Discount available</div>
                                  <div className="text-tiny">Morbi sapien massa, ultricies at rhoncus at, ullamcorper nec diam</div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="message-item  flex-three">
                                <div className="image">
                                  <i className="icon-26" />
                                </div>
                                <div>
                                  <div className="body-title">Discount available</div>
                                  <div className="text-tiny">Morbi sapien massa, ultricies at rhoncus at, ullamcorper nec diam</div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div> 
                        <div className="dropdown account">
                          <a type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="./assets/images/page/avata.jpg" alt="image" />
                          </a>
                          <ul className="dropdown-menu">
                            <li><a href="#">Account</a></li>
                            <li><a href="#">Setting</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="login.html">Logout</a></li>
                          </ul>
                        </div> 
                        <div className="mobile-nav-toggler mobile-button">
                          <i className="icon-bar" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Header Lower */}
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
          <section className="profile-dashboard">
            <form action="/" className="edit-profile">
              <div className="inner-header mb-40">
                <h3 className="title">My Profile</h3>
                <p className="des">There are many variations of passages of Lorem Ipsum</p>
              </div>
              <div className="upload-image-dashboard flex mb-80">
                <span className="title-avata">Avatar:</span>
                <div className="upload-image-wrap">
                  <div className="avata relative">
                    <img id="frame" src="./assets/images/page/update-profile.jpg" alt="image" />
                    <div className="icon-delete">
                      <i className="icon-delete-1" />
                    </div>
                  </div>
                  <span className="upload">Upload a new Avatar</span>
                  <div className="upload-file">
                    <input type="file" />
                  </div>
                  <p>Png, Jpg, Svg dimenson (300* 350) max file not more then size 4 mb</p>
                </div>
              </div>
              <div className="infomation-dashboard mb-70">
                <h4 className="title">User Information</h4>
                <div className="widget-dash-board">
                  <div className="grid-input-2">
                    <div className="input-wrap">
                      <label>First name</label>
                      <input type="text" placeholder="Mehedii" />
                    </div>
                    <div className="input-wrap">
                      <label>Last Name</label>
                      <input type="text" placeholder="Hassan" />
                    </div>
                    <div className="input-wrap">
                      <label>Phone</label>
                      <input type="tel" placeholder={+8801739495504} />
                    </div>
                    <div className="input-wrap">
                      <label>Email address*</label>
                      <input type="email" placeholder="Useronly21@gmail.com" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="infomation-dashboard mb-70">
                <h4 className="title">password Change Request</h4>
                <div className="widget-dash-board">
                  <div className="grid-input-2">
                    <div className="input-wrap">
                      <label>New Password</label>
                      <input type="password" placeholder="Mehedii" />
                    </div>
                    <div className="input-wrap">
                      <label>Re-type New Password</label>
                      <input type="password" placeholder="Hassan" />
                    </div>
                  </div>
                  <p className="mt-20">*Note: you can change your password up to 10 times in a year</p>
                </div>
              </div>
              <div className="infomation-dashboard mb-70">
                <h4 className="title">Social Profile Link</h4>
                <div className="widget-dash-board">
                  <div className="grid-input-3">
                    <div className="input-wrap">
                      <label><i className="icon-Vector-211" />Facebook</label>
                      <input type="url" placeholder="Www.facebook.com/username" />
                    </div>
                    <div className="input-wrap">
                      <label><i className="icon-Group-131" />Instagram</label>
                      <input type="url" placeholder="Www.instagram.com/user" />
                    </div>
                    <div className="input-wrap">
                      <label><i className="icon-twitter-sign-1" />Twitter</label>
                      <input type="url" placeholder="Www.Twitter.com/user" />
                    </div>
                    <div className="input-wrap">
                      <label><i className="icon-Group-141" />Dribble</label>
                      <input type="url" placeholder="Www.dribble.com/user" />
                    </div>
                    <div className="input-wrap">
                      <label><i className="icon-linkedin-1" />Linkedin</label>
                      <input type="url" placeholder="Www.linkedin.com/user" />
                    </div>
                    <div className="input-wrap">
                      <label><i className="icon-Layer-2-1" />Skype</label>
                      <input type="url" placeholder="@skype.me/12244hassan" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="otp-dashboard">
                <div className="checkbox-otp mb-60">
                  <input id="check-otp" type="checkbox" name="check" defaultValue="check" />
                  <label htmlFor="check-otp">I agree to Terms &amp; Conditions, Refund Policy and Privacy
                    Policy of Fabrilife.</label>
                </div>
                <h4 className="title">Verify is it you?</h4>
                <span className="send-otp">Sent OTP to this number</span>
                <div className="input-wrap mb-45">
                  <input type="tel" placeholder={""} />
                </div>
                <div className="flex-three">
                  <div className="button-wrap">
                    <button type="submit" className="save"><i className="icon-Vector-221" />Save
                      changes</button>
                    <button type="reset" className="reset"><i className="icon-reply-all" />Reset
                      All</button>
                  </div>
                </div>
              </div>
            </form>
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

export default MyProfile