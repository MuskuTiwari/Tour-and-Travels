import React from 'react'
import Header from '../pages/Layouts/Header'

function MyBooking() {
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
            <li className="active">
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
              <a href="my-favorite.html">
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
              <h3 className="title">My Booking</h3>
              <p className="des">There are many variations of passages of Lorem Ipsum</p>
            </div>
            <div className="my-booking-wrap ">
              <ul className="booking-table-title flex-three">
                <li>
                  <p>Description</p>
                </li>
                <li>
                  <p>Status</p>
                </li>
                <li>
                  <p>Start Date</p>
                </li>
                <li>
                  <p>End Date</p>
                </li>
                <li>
                  <p>Guests</p>
                </li>
                <li>
                  <p>Action</p>
                </li>
              </ul>
              <ul className="booking-table-content mb-60">
                <li className="flex-three">
                  <div className="booking-list flex-three">
                    <div className="image">
                      <img src="./assets/images/travel-list/11.jpg" alt="image" />
                    </div>
                    <div className="content">
                      <p className="id">ID: #4435</p>
                      <h6 className="title-booking"><a href="#">Chevrolet Suburban 2023</a></h6>
                      <p className="price">$27,000</p>
                    </div>
                  </div>
                  <div className="booking-list-table">
                    <p className="status">Approved</p>
                  </div>
                  <div className="booking-list-table">
                    <p className="date-gues">11 Apr 2023</p>
                  </div>
                  <div className="booking-list-table">
                    <p className="date-gues">11 Apr 2023</p>
                  </div>
                  <div className="booking-list-table">
                    <p className="date-gues">03 People</p>
                  </div>
                  <div className="flex-five action-wrap">
                    <div className="action flex-five">
                      <i className="icon-Vector-16" />
                    </div>
                    <div className="action flex-five">
                      <i className="icon-Vector-17" />
                    </div>
                  </div>
                </li>
                <li className="flex-three">
                  <div className="booking-list flex-three">
                    <div className="image">
                      <img src="./assets/images/travel-list/31.jpg" alt="image" />
                    </div>
                    <div className="content">
                      <p className="id">ID: #4435</p>
                      <h6 className="title-booking"><a href="#">Chevrolet Suburban 2023</a></h6>
                      <p className="price">$27,000</p>
                    </div>
                  </div>
                  <div className="booking-list-table">
                    <p className="status">Approved</p>
                  </div>
                  <div className="booking-list-table">
                    <p className="date-gues">11 Apr 2023</p>
                  </div>
                  <div className="booking-list-table">
                    <p className="date-gues">11 Apr 2023</p>
                  </div>
                  <div className="booking-list-table">
                    <p className="date-gues">03 People</p>
                  </div>
                  <div className="flex-five action-wrap">
                    <div className="action flex-five">
                      <i className="icon-Vector-16" />
                    </div>
                    <div className="action flex-five">
                      <i className="icon-Vector-17" />
                    </div>
                  </div>
                </li>
                <li className="flex-three">
                  <div className="booking-list flex-three">
                    <div className="image">
                      <img src="./assets/images/travel-list/29.jpg" alt="image" />
                    </div>
                    <div className="content">
                      <p className="id">ID: #4435</p>
                      <h6 className="title-booking"><a href="#">Chevrolet Suburban 2023</a></h6>
                      <p className="price">$27,000</p>
                    </div>
                  </div>
                  <div className="booking-list-table">
                    <p className="status">Approved</p>
                  </div>
                  <div className="booking-list-table">
                    <p className="date-gues">11 Apr 2023</p>
                  </div>
                  <div className="booking-list-table">
                    <p className="date-gues">11 Apr 2023</p>
                  </div>
                  <div className="booking-list-table">
                    <p className="date-gues">03 People</p>
                  </div>
                  <div className="flex-five action-wrap">
                    <div className="action flex-five">
                      <i className="icon-Vector-16" />
                    </div>
                    <div className="action flex-five">
                      <i className="icon-Vector-17" />
                    </div>
                  </div>
                </li>
                <li className="flex-three">
                  <div className="booking-list flex-three">
                    <div className="image">
                      <img src="./assets/images/travel-list/list3.jpg" alt="image" />
                    </div>
                    <div className="content">
                      <p className="id">ID: #4435</p>
                      <h6 className="title-booking"><a href="#">Chevrolet Suburban 2023</a></h6>
                      <p className="price">$27,000</p>
                    </div>
                  </div>
                  <div className="booking-list-table">
                    <p className="status">Approved</p>
                  </div>
                  <div className="booking-list-table">
                    <p className="date-gues">11 Apr 2023</p>
                  </div>
                  <div className="booking-list-table">
                    <p className="date-gues">11 Apr 2023</p>
                  </div>
                  <div className="booking-list-table">
                    <p className="date-gues">03 People</p>
                  </div>
                  <div className="flex-five action-wrap">
                    <div className="action flex-five">
                      <i className="icon-Vector-16" />
                    </div>
                    <div className="action flex-five">
                      <i className="icon-Vector-17" />
                    </div>
                  </div>
                </li>
                <li className="flex-three">
                  <div className="booking-list flex-three">
                    <div className="image">
                      <img src="./assets/images/travel-list/list4.jpg" alt="image" />
                    </div>
                    <div className="content">
                      <p className="id">ID: #4435</p>
                      <h6 className="title-booking"><a href="#">Chevrolet Suburban 2023</a></h6>
                      <p className="price">$27,000</p>
                    </div>
                  </div>
                  <div className="booking-list-table">
                    <p className="status">Approved</p>
                  </div>
                  <div className="booking-list-table">
                    <p className="date-gues">11 Apr 2023</p>
                  </div>
                  <div className="booking-list-table">
                    <p className="date-gues">11 Apr 2023</p>
                  </div>
                  <div className="booking-list-table">
                    <p className="date-gues">03 People</p>
                  </div>
                  <div className="flex-five action-wrap">
                    <div className="action flex-five">
                      <i className="icon-Vector-16" />
                    </div>
                    <div className="action flex-five">
                      <i className="icon-Vector-17" />
                    </div>
                  </div>
                </li>
              </ul>
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
</div>

  )
}

export default MyBooking