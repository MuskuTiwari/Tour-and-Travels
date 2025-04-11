import React from 'react'
import Header from '../Layouts/Header'

function Blog() {
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
                <h1 className="title">Blog Page</h1>
                <ul className="breadcumb-list flex-five">
                  <li><a href="index.html">Home</a></li>
                  <li><span>Blog Page</span></li>
                </ul>
                <img className="bcrumb-ab" src="./assets/images/page/mask-bcrumb.png" alt />
              </div>
            </div>
          </div>
        </section>
        <section className="our-blog pd-main">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-8 col-12">
                <article className="side-blog mb-56px">
                  <div className="blog-image">
                    <div className="list-categories">
                      <a href="#" className="new">24 Feb</a>
                    </div>
                    <a className="post-thumbnail" href="blog-details.html">
                      <img src="./assets/images/blog/blog.jpg" alt="Image blog" />
                    </a>
                  </div>
                  <div className="blog-content">
                    <div className="top-detail-info">
                      <ul className="flex-three">
                        <li>
                          <i className="icon-user" />
                          <a href="#">Mehedii .Ha</a>
                        </li>
                        <li>
                          <i className="icon-25" />
                          <span className="date">Coments (03)</span>
                        </li>
                        <li>
                          <i className="icon-24" />
                          <span className="date">3 min Read</span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="entry-title">
                      <a href="blog-details.html">The whimsically named Egg Canvas brainch </a>
                    </h3>
                    <p className="description">There are many variations of passages of Lorem Ipsum
                      available, but majority have suffered
                      teration in some form, by injected humour, or randomised words which don't
                      look even slight
                      believable. If you are going to use a passage of Lorem Ipsum.
                    </p>
                    <div className="button-main ">
                      <a href="blog-details.html" className="button-link">Read More <i className="icon-Arrow-11" /></a>
                    </div>
                  </div>
                </article>
                <article className="side-blog mb-56px">
                  <div className="blog-image">
                    <div className="list-categories">
                      <a href="#" className="new">24 Feb</a>
                    </div>
                    <a className="post-thumbnail" href="blog-details.html">
                      <img src="./assets/images/blog/blog1.jpg" alt="Image blog" />
                    </a>
                  </div>
                  <div className="blog-content">
                    <div className="top-detail-info">
                      <ul className="flex-three">
                        <li>
                          <i className="icon-user" />
                          <a href="#">Mehedii .Ha</a>
                        </li>
                        <li>
                          <i className="icon-25" />
                          <span className="date">Coments (03)</span>
                        </li>
                        <li>
                          <i className="icon-24" />
                          <span className="date">3 min Read</span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="entry-title">
                      <a href="blog-details.html">The whimsically named Egg Canvas brainch </a>
                    </h3>
                    <p className="description">There are many variations of passages of Lorem Ipsum
                      available, but majority have suffered
                      teration in some form, by injected humour, or randomised words which don't
                      look even slight
                      believable. If you are going to use a passage of Lorem Ipsum.
                    </p>
                    <div className="button-main">
                      <a href="blog-details.html" className="button-link">Read More<i className="icon-Arrow-11" /></a>
                    </div>
                  </div>
                </article>
                <article className="side-blog mb-56px">
                  <div className="blog-image">
                    <div className="list-categories">
                      <a href="#" className="new">24 Feb</a>
                    </div>
                    <a className="post-thumbnail" href="blog-details.html">
                      <img src="./assets/images/blog/blog2.jpg" alt="Image blog" />
                    </a>
                  </div>
                  <div className="blog-content">
                    <div className="top-detail-info">
                      <ul className="flex-three">
                        <li>
                          <i className="icon-user" />
                          <a href="#">Mehedii .Ha</a>
                        </li>
                        <li>
                          <i className="icon-25" />
                          <span className="date">Coments (03)</span>
                        </li>
                        <li>
                          <i className="icon-24" />
                          <span className="date">3 min Read</span>
                        </li>
                      </ul>
                    </div>
                    <h3 className="entry-title">
                      <a href="blog-details.html">The whimsically named Egg Canvas brainch </a>
                    </h3>
                    <p className="description">There are many variations of passages of Lorem Ipsum
                      available, but majority have suffered
                      teration in some form, by injected humour, or randomised words which don't
                      look even slight
                      believable. If you are going to use a passage of Lorem Ipsum.
                    </p>
                    <div className="button-main">
                      <a href="blog-details.html" className="button-link">Read More<i className="icon-Arrow-11" /></a>
                    </div>
                  </div>
                </article>
                <div className="row">
                  <div className="col-md-12 ">
                    <ul className="tf-pagination flex-five mt-20">
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
              <div className="col-lg-4 col-12">
                <div className="side-bar-right">
                  <div className="sidebar-widget">
                    <div className="profile-widget center">
                      <img src="./assets/images/avata/avt-blog.jpg" alt="Image Blog" className="avata" />
                      <div className="name">Rosalina D. Willaim</div>
                      <span className="job">Blogger/Photographer</span>
                      <p className="des">he whimsically named Egg Canvas is the
                        design director and photographer
                        in New York. Why the nam
                      </p>
                      <ul className="social">
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
                  <div className="sidebar-widget">
                    <h4 className="block-heading">search here</h4>
                    <form action="/" id="search-bar-widget">
                      <input type="text" placeholder="Search here..." />
                      <button type="button"><i className="icon-search-2" /></button>
                    </form>
                  </div>
                  <div className="sidebar-widget">
                    <h4 className="block-heading">Recent News</h4>
                    <div className="recent-post-list">
                      <div className="list-recent flex-three">
                        <a href="blog-details.html" className="recent-image">
                          <img src="./assets/images/blog/re-blog1.jpg" alt="Image" />
                        </a>
                        <div className="recent-info">
                          <div className="date">
                            <i className="icon-4" />
                            <span>Jan 23,2022</span>
                          </div>
                          <h4 className="title">
                            <a href="blog-details.html">Budget Issues Force The Our To
                              Become</a>
                          </h4>
                        </div>
                      </div>
                      <div className="list-recent flex-three">
                        <a href="blog-details.html" className="recent-image">
                          <img src="./assets/images/blog/re-blog2.jpg" alt="Image" />
                        </a>
                        <div className="recent-info">
                          <div className="date">
                            <i className="icon-4" />
                            <span>Jan 23,2022</span>
                          </div>
                          <h4 className="title">
                            <a href="blog-details.html">The Best Products That Shape
                              Fashion</a>
                          </h4>
                        </div>
                      </div>
                      <div className="list-recent flex-three">
                        <a href="blog-details.html" className="recent-image">
                          <img src="./assets/images/blog/re-blog3.jpg" alt="Image" />
                        </a>
                        <div className="recent-info">
                          <div className="date">
                            <i className="icon-4" />
                            <span>Jan 23,2022</span>
                          </div>
                          <h4 className="title">
                            <a href="blog-details.html">The Best Products That Shape
                              Fashion</a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-widget">
                    <h4 className="block-heading">Categories</h4>
                    <ul className="category-blog">
                      <li>
                        <a href="#" className="flex-two">
                          <span>Mobile Set</span>
                          <span>03</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex-two">
                          <span>Mobile Set</span>
                          <span>03</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex-two">
                          <span>Mobile Set</span>
                          <span>03</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex-two">
                          <span>Mobile Set</span>
                          <span>03</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-widget">
                    <h4 className="block-heading">Tags</h4>
                    <ul className="tag">
                      <li>
                        <a href="#">Tourist</a>
                      </li>
                      <li>
                        <a href="#">Traveling</a>
                      </li>
                      <li>
                        <a href="#">Cave</a>
                      </li>
                      <li>
                        <a href="#">Sky Dive</a>
                      </li>
                      <li>
                        <a href="#">Hill Climb</a>
                      </li>
                      <li>
                        <a href="#">Oppos</a>
                      </li>
                      <li>
                        <a href="#" className="active">Landing</a>
                      </li>
                      <li>
                        <a href="#">Oppos</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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

export default Blog