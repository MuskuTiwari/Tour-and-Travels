import React from 'react'
import Header from '../pages/Layouts/Header'

function MyListing() {
  return (
   <div>
  <div>MyListing</div><div id="wrapper">
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
            <li className="active">
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
              <h3 className="title">My Listings</h3>
              <p className="des">There are many variations of passages of Lorem Ipsum</p>
            </div>
            <div className="favorite-wrap">
              <div className="my-listing-grid mb-50">
                <div className="my-listing-item flex-three">
                  <div className="image relative">
                    <img src="./assets/images/tour/tour5.7.jpg" alt="image" />
                    <span className="featured">Featured</span>
                  </div>
                  <div className="content">
                    <div className="flex-two">
                      <span className="map"><i className="icon-Vector-15" />United States USA</span>
                      <div className="flex">
                        <span className="media"><i className="icon-Group-1000002909" />5</span>
                        <span className="media"><i className="icon-Group-1000002910" />2</span>
                      </div>
                    </div>
                    <h6 className="title-listing"><a href="#">Essence of Vietnam South to North</a></h6>
                    <div className="review">
                      <i className="icon-Star" />
                      <i className="icon-Star" />
                      <i className="icon-Star" />
                      <i className="icon-Star" />
                      <i className="icon-Star" />
                      <span>(1 Review)</span>
                    </div>
                    <ul className="list-meta flex-three">
                      <li>
                        <i className="icon-time-left" />
                        <span>5 days</span>
                      </li>
                      <li>
                        <i className="icon-Vector-6" />
                        <span>12 Person</span>
                      </li>
                    </ul>
                    <p className="price text-end">From <span className="text-main"> $169.00</span></p>
                  </div>
                </div>
                <div className="my-listing-item flex-three">
                  <div className="image relative">
                    <img src="./assets/images/travel-list/18.jpg" alt="image" />
                    <span className="featured">Featured</span>
                  </div>
                  <div className="content">
                    <div className="flex-two">
                      <span className="map"><i className="icon-Vector-15" />United States USA</span>
                      <div className="flex">
                        <span className="media"><i className="icon-Group-1000002909" />5</span>
                        <span className="media"><i className="icon-Group-1000002910" />2</span>
                      </div>
                    </div>
                    <h6 className="title-listing"><a href="#">Essence of Vietnam South to North</a></h6>
                    <div className="review">
                      <i className="icon-Star" />
                      <i className="icon-Star" />
                      <i className="icon-Star" />
                      <i className="icon-Star" />
                      <i className="icon-Star" />
                      <span>(1 Review)</span>
                    </div>
                    <ul className="list-meta flex-three">
                      <li>
                        <i className="icon-time-left" />
                        <span>5 days</span>
                      </li>
                      <li>
                        <i className="icon-Vector-6" />
                        <span>12 Person</span>
                      </li>
                    </ul>
                    <p className="price text-end">From <span className="text-main"> $169.00</span></p>
                  </div>
                </div>
                <div className="my-listing-item flex-three">
                  <div className="image relative">
                    <img src="./assets/images/travel-list/my-list3.jpg" alt="image" />
                    <span className="featured">Featured</span>
                  </div>
                  <div className="content">
                    <div className="flex-two">
                      <span className="map"><i className="icon-Vector-15" />United States USA</span>
                      <div className="flex">
                        <span className="media"><i className="icon-Group-1000002909" />5</span>
                        <span className="media"><i className="icon-Group-1000002910" />2</span>
                      </div>
                    </div>
                    <h6 className="title-listing"><a href="#">Essence of Vietnam South to North</a></h6>
                    <div className="review">
                      <i className="icon-Star" />
                      <i className="icon-Star" />
                      <i className="icon-Star" />
                      <i className="icon-Star" />
                      <i className="icon-Star" />
                      <span>(1 Review)</span>
                    </div>
                    <ul className="list-meta flex-three">
                      <li>
                        <i className="icon-time-left" />
                        <span>5 days</span>
                      </li>
                      <li>
                        <i className="icon-Vector-6" />
                        <span>12 Person</span>
                      </li>
                    </ul>
                    <p className="price text-end">From <span className="text-main"> $169.00</span></p>
                  </div>
                </div>
                <div className="my-listing-item flex-three">
                  <div className="image relative">
                    <img src="./assets/images/travel-list/my-list4.jpg" alt="image" />
                    <span className="featured">Featured</span>
                  </div>
                  <div className="content">
                    <div className="flex-two">
                      <span className="map"><i className="icon-Vector-15" />United States USA</span>
                      <div className="flex">
                        <span className="media"><i className="icon-Group-1000002909" />5</span>
                        <span className="media"><i className="icon-Group-1000002910" />2</span>
                      </div>
                    </div>
                    <h6 className="title-listing"><a href="#">Essence of Vietnam South to North</a></h6>
                    <div className="review">
                      <i className="icon-Star" />
                      <i className="icon-Star" />
                      <i className="icon-Star" />
                      <i className="icon-Star" />
                      <i className="icon-Star" />
                      <span>(1 Review)</span>
                    </div>
                    <ul className="list-meta flex-three">
                      <li>
                        <i className="icon-time-left" />
                        <span>5 days</span>
                      </li>
                      <li>
                        <i className="icon-Vector-6" />
                        <span>12 Person</span>
                      </li>
                    </ul>
                    <p className="price text-end">From <span className="text-main"> $169.00</span></p>
                  </div>
                </div>
                <div className="my-listing-item flex-three">
                  <div className="image relative">
                    <img src="./assets/images/travel-list/my-list5.jpg" alt="image" />
                    <span className="featured">Featured</span>
                  </div>
                  <div className="content">
                    <div className="flex-two">
                      <span className="map"><i className="icon-Vector-15" />United States USA</span>
                      <div className="flex">
                        <span className="media"><i className="icon-Group-1000002909" />5</span>
                        <span className="media"><i className="icon-Group-1000002910" />2</span>
                      </div>
                    </div>
                    <h6 className="title-listing"><a href="#">Essence of Vietnam South to North</a></h6>
                    <div className="review">
                      <i className="icon-Star" />
                      <i className="icon-Star" />
                      <i className="icon-Star" />
                      <i className="icon-Star" />
                      <i className="icon-Star" />
                      <span>(1 Review)</span>
                    </div>
                    <ul className="list-meta flex-three">
                      <li>
                        <i className="icon-time-left" />
                        <span>5 days</span>
                      </li>
                      <li>
                        <i className="icon-Vector-6" />
                        <span>12 Person</span>
                      </li>
                    </ul>
                    <p className="price text-end">From <span className="text-main"> $169.00</span></p>
                  </div>
                </div>
                <div className="my-listing-item flex-three">
                  <div className="image relative">
                    <img src="./assets/images/travel-list/my-list6.jpg" alt="image" />
                    <span className="featured">Featured</span>
                  </div>
                  <div className="content">
                    <div className="flex-two">
                      <span className="map"><i className="icon-Vector-15" />United States USA</span>
                      <div className="flex">
                        <span className="media"><i className="icon-Group-1000002909" />5</span>
                        <span className="media"><i className="icon-Group-1000002910" />2</span>
                      </div>
                    </div>
                    <h6 className="title-listing"><a href="#">Essence of Vietnam South to North</a></h6>
                    <div className="review">
                      <i className="icon-Star" />
                      <i className="icon-Star" />
                      <i className="icon-Star" />
                      <i className="icon-Star" />
                      <i className="icon-Star" />
                      <span>(1 Review)</span>
                    </div>
                    <ul className="list-meta flex-three">
                      <li>
                        <i className="icon-time-left" />
                        <span>5 days</span>
                      </li>
                      <li>
                        <i className="icon-Vector-6" />
                        <span>12 Person</span>
                      </li>
                    </ul>
                    <p className="price text-end">From <span className="text-main"> $169.00</span></p>
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

export default MyListing