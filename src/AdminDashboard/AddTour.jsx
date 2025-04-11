import React from 'react'
import Header from '../pages/Layouts/Header'

function AddTour() {
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
            <li className="active">
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
              <h3 className="title">Add Tour</h3>
              <p className="des">There are many variations of passages of Lorem Ipsum</p>
            </div>
            <form action="/" id="form-add-tour" className="form-add-tour">
              <div className="widget-dash-board pr-256 mb-75">
                <h4 className="title-add-tour mb-30">1. information</h4>
                <div className="grid-input-2 mb-45">
                  <div className="input-wrap">
                    <label>Enter your tittle</label>
                    <input type="text" placeholder="Switzerland city tour" />
                  </div>
                  <div className="input-wrap">
                    <label>Enter your tittle</label>
                    <div className="nice-select" tabIndex={0}>
                      <span className="current">Catagory</span>
                      <ul className="list">
                        <li data-value className="option selected focus">Catagory</li>
                        <li data-value="category 1" className="option">Catagory 1</li>
                        <li data-value="category 2" className="option">Catagory 2</li>
                        <li data-value="category 3" className="option">Catagory 3</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="input-wrap mb-45">
                  <label>Enter Keyword</label>
                  <input type="text" placeholder="Keyword" />
                </div>
                <div className="input-wrap mb-45">
                  <label>Description</label>
                  <textarea name="description" rows={12} cols={50} placeholder="Write content" defaultValue={""} />
                </div>
                <div className="input-wrap">
                  <label>Upload Photo</label>
                  <div className="upload-image-add-car mb-30">
                    <div className="upload-image">
                      <label htmlFor="photoLoad" className="uploadLabel">
                        <i className="icon-Group-10" />
                        <span>Add a Photo</span>
                        <input type="file" id="photoLoad" className="photoLoad" accept="image/*" />
                      </label>
                    </div>
                    <div className="upload-image">
                      <label htmlFor="photoLoad1" className="uploadLabel">
                        <i className="icon-Group-10" />
                        <span>Add a Photo</span>
                        <input type="file" id="photoLoad1" className="photoLoad" accept="image/*" />
                      </label>
                    </div>
                    <div className="upload-image">
                      <label htmlFor="photoLoad2" className="uploadLabel">
                        <i className="icon-Group-10" />
                        <span>Add a Photo</span>
                        <input type="file" id="photoLoad2" className="photoLoad" accept="image/*" />
                      </label>
                    </div>
                    <div className="upload-image">
                      <label htmlFor="photoLoad3" className="uploadLabel">
                        <i className="icon-Group-10" />
                        <span>Add a Photo</span>
                        <input type="file" id="photoLoad3" className="photoLoad" accept="image/*" />
                      </label>
                    </div>
                  </div>
                  <p><span className="text-main">*</span>Supported <span className="text-main">Png</span> &amp;
                    Jpg Not more than 2 Mb</p>
                </div>
              </div>
              <div className="widget-dash-board pr-256 mb-75">
                <h4 className="title-add-tour mb-30">2. Tour Planing</h4>
                <div className="input-wrap mb-45">
                  <div className="flex-two mb-70">
                    <input type="text" placeholder="Enter Tittle" />
                    <div className="icon-delete-title flex-five">
                      <i className="icon-delete-1" />
                    </div>
                  </div>
                  <textarea className="textarea-tinymce" name="area" defaultValue={""} />
                </div>
                <div className="input-wrap text-end">
                  <button type="button" className="button-add"> <i className="icon-uniE914" />Add</button>
                </div>
              </div>
              <div className="widget-dash-board pr-256 mb-75">
                <h4 className="title-add-tour mb-30">2. Location</h4>
                <div className="grid-input-2 mb-45">
                  <div className="input-wrap">
                    <label>Select City</label>
                    <div className="nice-select" tabIndex={0}>
                      <span className="current">London</span>
                      <ul className="list">
                        <li data-value className="option selected focus">London</li>
                        <li data-value="tokyo" className="option">Tokyo</li>
                        <li data-value="hanoi" className="option">Ha noi</li>
                        <li data-value="taiwan" className="option">Taiwan</li>
                      </ul>
                    </div>
                  </div>
                  <div className="input-wrap">
                    <label>Select State</label>
                    <div className="nice-select" tabIndex={0}>
                      <span className="current">state</span>
                      <ul className="list">
                        <li data-value className="option selected focus">state</li>
                        <li data-value="category 1" className="option">state 1</li>
                        <li data-value="category 2" className="option">state 2</li>
                        <li data-value="category 3" className="option">state 3</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="input-wrap mb-40">
                  <label>Address Details</label>
                  <div className="flex-two ">
                    <input type="text" placeholder="2464 Royal Ln. Mesa, New Jersey 45463" />
                    <div className="icon-delete-title flex-five">
                      <i className="icon-Vector5" />
                    </div>
                  </div>
                </div>
                <div className="input-wrap mb-40">
                  <div className="map3 relative">
                    <div id="map3" />
                  </div>
                </div>
                <div className="grid-input-2 mb-45">
                  <div className="input-wrap">
                    <label>Zip Code</label>
                    <input type="text" placeholder={3462} />
                  </div>
                  <div className="input-wrap">
                    <label>Country</label>
                    <input type="text" placeholder="United Kingdom" />
                  </div>
                </div>
                <div className="input-wrap ">
                  <button type="button" className="button-add"> Save changes </button>
                </div>
              </div>
              <div className="widget-dash-board pr-256 mb-75">
                <h4 className="title-add-tour mb-30">2. What’s Include?</h4>
                <div className="row mb-60">
                  <div className="col-lg-3">
                    <div className="checkbox">
                      <input id="check" type="checkbox" name="check" defaultValue="check" />
                      <label htmlFor="check">Laundry Service</label>
                    </div>
                    <div className="checkbox">
                      <input id="check1" type="checkbox" name="check" defaultValue="check" />
                      <label htmlFor="check1">Food &amp; Drinks</label>
                    </div>
                    <div className="checkbox">
                      <input id="check2" type="checkbox" name="check" defaultValue="check" />
                      <label htmlFor="check2">Swimming Pool</label>
                    </div>
                    <div className="checkbox">
                      <input id="check3" type="checkbox" name="check" defaultValue="check" />
                      <label htmlFor="check3">Alarm System</label>
                    </div>
                    <div className="checkbox">
                      <input id="check4" type="checkbox" name="check" defaultValue="check" />
                      <label htmlFor="check4">Navigation</label>
                    </div>
                    <div className="checkbox">
                      <input id="check5" type="checkbox" name="check" defaultValue="check" />
                      <label htmlFor="check5">Window Coverings</label>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="checkbox">
                      <input id="conditioning" type="checkbox" name="check" defaultValue="check" />
                      <label htmlFor="conditioning">Air Conditioning</label>
                    </div>
                    <div className="checkbox">
                      <input id="microwave" type="checkbox" name="check" defaultValue="check" />
                      <label htmlFor="microwave">Microwave</label>
                    </div>
                    <div className="checkbox">
                      <input id="outdoor" type="checkbox" name="check" defaultValue="check" />
                      <label htmlFor="outdoor">Outdoor Shower</label>
                    </div>
                    <div className="checkbox">
                      <input id="alarm" type="checkbox" name="check" defaultValue="check" />
                      <label htmlFor="alarm">Alarm System</label>
                    </div>
                    <div className="checkbox">
                      <input id="navigation" type="checkbox" name="check" defaultValue="check" />
                      <label htmlFor="navigation">Navigation</label>
                    </div>
                    <div className="checkbox">
                      <input id="covering" type="checkbox" name="check" defaultValue="check" />
                      <label htmlFor="covering">Window Covering</label>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="checkbox">
                      <input id="check13" type="checkbox" name="check" defaultValue="check" />
                      <label htmlFor="check13">Laundry Service</label>
                    </div>
                    <div className="checkbox">
                      <input id="check88" type="checkbox" name="check" defaultValue="check" />
                      <label htmlFor="check88">Food &amp; Drinks</label>
                    </div>
                    <div className="checkbox">
                      <input id="check99" type="checkbox" name="check" defaultValue="check" />
                      <label htmlFor="check99">Swimming Pool</label>
                    </div>
                    <div className="checkbox">
                      <input id="check43" type="checkbox" name="check" defaultValue="check" />
                      <label htmlFor="check43">Alarm System</label>
                    </div>
                    <div className="checkbox">
                      <input id="check53" type="checkbox" name="check" defaultValue="check" />
                      <label htmlFor="check53">Navigation</label>
                    </div>
                    <div className="checkbox">
                      <input id="check63" type="checkbox" name="check" defaultValue="check" />
                      <label htmlFor="check63">Window Coverings</label>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="checkbox">
                      <input id="check41" type="checkbox" name="check" defaultValue="check" />
                      <label htmlFor="check41">Laundry Service</label>
                    </div>
                    <div className="checkbox">
                      <input id="check42" type="checkbox" name="check" defaultValue="check" />
                      <label htmlFor="check42">Food &amp; Drinks</label>
                    </div>
                    <div className="checkbox">
                      <input id="check77" type="checkbox" name="check" defaultValue="check" />
                      <label htmlFor="check77">Swimming Pool</label>
                    </div>
                    <div className="checkbox">
                      <input id="check66" type="checkbox" name="check" defaultValue="check" />
                      <label htmlFor="check66">Alarm System</label>
                    </div>
                    <div className="checkbox">
                      <input id="check44" type="checkbox" name="check" defaultValue="check" />
                      <label htmlFor="check44">Navigation</label>
                    </div>
                    <div className="checkbox">
                      <input id="check54" type="checkbox" name="check" defaultValue="check" />
                      <label htmlFor="check54">Window Coverings</label>
                    </div>
                  </div>
                </div>
                <div className="input-wrap ">
                  <button type="button" className="button-add"> Save changes </button>
                </div>
              </div>
              <div className="widget-dash-board pr-256 mb-75">
                <h4 className="title-add-tour mb-30">3. Pricing</h4>
                <div className="grid-input-2 mb-45">
                  <div className="input-wrap">
                    <label>Tour Price</label>
                    <input type="text" placeholder="$3215" />
                  </div>
                  <div className="input-wrap">
                    <label>Tour Price</label>
                    <input type="text" placeholder="$3215" />
                  </div>
                </div>
                <div className="input-wrap">
                  <label>Extra Price</label>
                  <div className="flex-two mb-32">
                    <div className="grid-input-3">
                      <input type="text" placeholder="Add Service Per Booking" />
                      <input type="text" placeholder="Description" />
                      <input type="text" placeholder="$27" />
                    </div>
                    <div className="icon-delete-price">
                      <i className="icon-delete-1" />
                    </div>
                  </div>
                  <div className="flex-two">
                    <div className="grid-input-3">
                      <input type="text" placeholder="Add Service Per Booking" />
                      <input type="text" placeholder="Description" />
                      <input type="text" placeholder="$27" />
                    </div>
                    <div className="icon-delete-price">
                      <i className="icon-delete-1" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget-dash-board pr-256">
                <h4 className="title-add-tour mb-30">3. Tour date &amp; Time</h4>
                <div className="grid-input-2 mb-25">
                  <div className="input-wrap">
                    <label>Tour duration</label>
                    <div className="nice-select" tabIndex={0}>
                      <span className="current">2-4 days tour</span>
                      <ul className="list">
                        <li data-value className="option selected focus">2-4 days tour</li>
                        <li data-value="3-6" className="option">3-6 days tour</li>
                        <li data-value="4-8" className="option">4-8 days tour</li>
                        <li data-value="5-10" className="option">5-10 days tour</li>
                      </ul>
                    </div>
                  </div>
                  <div className="input-wrap">
                    <label>Start date</label>
                    <input type="date" />
                  </div>
                </div>
                <div className="grid-input-2 mb-45">
                  <div className="input-wrap">
                    <label>Return Date</label>
                    <input type="date" />
                  </div>
                  <div className="input-wrap">
                  </div>
                </div>
                <div className="input-wrap">
                  <button type="button" className="button-add"> Save changes</button>
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

export default AddTour