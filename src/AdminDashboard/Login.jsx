import React from 'react'

function Login() {
  return (
     <div>
  <div id="wrapper">
    <div id="pagee" className="clearfix">
      {/* Main Header */}
     <Header/>
      {/* End Main Header */}
      <main id="main">
        <section className="breadcumb-section">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-12 center z-index1">
                <h1 className="title">User Login</h1>
                <ul className="breadcumb-list flex-five">
                  <li><a href="index.html">Home</a></li>
                  <li><span>User Login</span></li>
                </ul>
                <img className="bcrumb-ab" src="./assets/images/page/mask-bcrumb.png" alt />
              </div>
            </div>
          </div>
        </section>
        <section className="login">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-12">
                <div className="login-wrap flex">
                  <div className="image">
                    <img src="./assets/images/page/sign-up.jpg" alt="image" />
                  </div>
                  <div className="content">
                    <div className="inner-header-login">
                      <h3 className="title">Create an account to get started</h3>
                      <div className="flex-three">
                        <span className="sale">20% off</span>
                        <p>get 20% off for web signup</p>
                      </div>
                    </div>
                    <form action="/" id="login" className="login-user">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-wrap">
                            <label>Name</label>
                            <input type="text" placeholder="Enter your name*" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-wrap">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your name*" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-wrap">
                            <div className="flex-two">
                              <label>Your password</label>
                              <a href="#" className="mb-15">Forgot Password?</a>
                            </div>
                            <input type="password" placeholder="Enter your password*" />
                          </div>
                        </div>
                        <div className="col-lg-12 mb-40">
                          <div className="input-wrap-social ">
                            <span className="or">or</span>
                            <div className="flex-three">
                              <a href="#" className="login-social flex-three">
                                <img src="./assets/images/page/gg.png" alt="image" />
                                <span>Sign in with Google</span>
                              </a>
                              <a href="#" className="login-social flex-three">
                                <img src="./assets/images/page/fb.png" alt="image" />
                                <span>Sign in with facebook</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 mb-30">
                          <button type="submit " className="btn-submit">Sign in</button>
                        </div>
                        <div className="col-lg-12 mb-30">
                          <div className="checkbox">
                            <input id="check-policy" type="checkbox" name="check" defaultValue="check" />
                            <label htmlFor="check-policy">By signing up, you agree to
                              Customers.ai’s Terms Of Service and Privacy Policy</label>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="flex-three">
                            <span className="account">Don,t you have an account?</span>
                            <a href="sign-up.html" className="link-login">Register</a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="brand-logo-widget bg-1">
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
  <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
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

export default Login