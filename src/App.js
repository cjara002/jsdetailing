import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
// import Monster from "./components/Monster/monster.jsx";
import Jlogo from "./img/JLogo.JPG";
// import TempLogo from "./img/tempLogo.png";
// import Logo from "./img/logo.png";
// import Audi from "./img/banner/audiBanner.jpg";
import Audi from "./img/banner/audiBannerCustom.jpg";
// import Interior from "./img/banner/interiorBanner.jpg";
// import Customer from "./img/banner/customerBanner.jpg";
import Car from "./img/services/servicesCar.jpg";
import SUV from "./img/services/servicesSUV.jpg";
import Truck from "./img/services/servicesTruck.jpg";
import testBg from "./img/testimonial/washCar.jpg";
// import face1 from "./img/testimonial/face1.jpg";
import face2 from "./img/testimonial/smallFace.jpg";
import backCar from "./img/gallery/BackBeforeAndAfter.jpg";
import frontCar from "./img/gallery/FrontBeforeAndAfter.jpg";
import interiorCar from "./img/gallery/InteriorBeforeAndAfter.jpg";
import wash from "./img/CTA/carWash.jpg";
import TopBar from "./components/topBar/topBar.jsx";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-wrapper">
          <header className="header-style3 header-custom">
           <TopBar />

            <div className="navbar-default">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-12">
                    <div menu_area alt-font>
                      {/* nav bar start  */}
                      <nav className="navbar navbar-expand-lg navbar-light p-0 d-flex justify-content-between">
                        {/* logo start */}
                        <div className="navbar-header navbar-header-custom">
                          <a
                            href="/"
                            className="navbar-brand xs-width-145px d-inline-block mr-lg-0"
                          >
                            <img src={Jlogo} alt="logo" id="logo" />
                            {/* <img src={TempLogo} alt="logo"  id="logo"/> */}
                            {/* <img src={Logo} alt="logo"  id="logo"/> */}
                          </a>
                        </div>
                        {/* logo end */}

                        {/* menu start */}
                        <ul className="navbar-nav ml-auto" id="nav">
                          <li>
                            <a href="/">Services</a>
                          </li>
                          <li>
                            <a href="/">Testimonials</a>
                          </li>
                          <li>
                            <a href="/">Gallery</a>
                          </li>
                          <li className="ml-2">
                            <a href="/" className="butn appointment">
                              <i className="fas fa-calendar-day mr-1 align-middle display-28"></i>
                              <span className="alt-font align-middle d-none d-xxl-inline-block">
                                Book Now
                              </span>
                            </a>
                          </li>
                        </ul>
                        {/* menu end */}
                        {/* attri nav start */}
                        {/* <div className="attr-nav">
                          <ul>
                            <li className="dropdown">
                              <a href="/">
                                <i className="fas fa-shopping-cart"></i>
                                <span className="badge bg-primary">3</span>
                              </a>
                            </li>
                          </ul>
                        </div> */}
                        {/* attri nav end */}
                      </nav>
                      {/* nav bar end  */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* can add modal here for the appointment button */}
          </header>
          {/* Hero Banner Start */}
          <div className="screen-height">
            <div className="slider-fade3 h-100">
              <div className="owl-carousel owl-theme w-100 h-100">
                <div
                  className="item bg-img h-100 cover-background"
                  data-overlay-dark="6"
                  style={{ backgroundImage: `url(${Audi})` }}
                >
                  <div className="container h-100">
                    <div className="d-table h-100 w-100">
                      <div className="d-table-cell align-middle caption">
                        <div className="overflow-hidden w-95 w-md-85 w-lg-80">
                          <h3 className="text-gold mb-3">
                            Unleash the best within
                          </h3>
                          <h1 className="text-white mb-4 w-85">
                            Affordable Mobile Car Detailing
                          </h1>
                          <a href="#!" className="butn gold">
                            <span>Learn More</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div
                  className="item bg-img text-center cover-background"
                  data-overlay-dark="6"
                  style={{ backgroundImage: `url(${Interior})` }}
                >
                  <div className="container h-100">
                    <div className="d-table h-100 w-100">
                      <div className="d-table-cell align-middle caption">
                        <div className="overflow-hidden w-95 w-md-85 w-lg-80">
                          <h3 className="text-gold mb-3">
                          Make your car last a lifetime
                          </h3>
                          <h1 className="text-white mb-4 w-85">
                             We come to you weekdays or weekends
                          </h1>
                          <a href="#!" className="butn gold">
                            <span>Learn More</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="item bg-img text-right cover-background"
                  data-overlay-dark="6"
                  style={{ backgroundImage: `url(${Customer})` }}
                >
                  <div className="container h-100">
                    <div className="d-table h-100 w-100">
                      <div className="d-table-cell align-middle caption">
                        <div className="overflow-hidden w-95 w-md-85 w-lg-80">
                          <h3 className="text-gold mb-3">
                          Don't deal with the hassle of caring for your car
                          </h3>
                          <h1 className="text-white mb-4 w-85">
                             Your satification is our goal
                          </h1>
                          <a href="#!" className="butn gold">
                            <span>Learn More</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {/* Hero Banner End */}

          {/* Info Section Start */}
          <section className="pb-0 p-lg-0 feature-box-03">
            <div className="container position-relative z-index-9">
              <div className="row g-0">
                <div className="col-4 bg-white"></div>
                <div className="col-4 bg-white">
                  <div className="p-2-0 p-xl-5 bg-gold h-100">
                    <span className="mb-4 d-inline-block">
                      {/* img here <img src="img/icons/icon-appointment.png" alt="..."> */}
                      <h3 className=" mb-4 text-white">Operating Hours</h3>
                      <ul className="mb-0 list-unstyled">
                        <li className="text-grey display-30 border-bottom mb-2 pb-2 border-color-light-white">
                          <span>Monday - Friday</span>
                          <br />
                          <span className="float-right">4:00 PM - 6:00 PM</span>
                        </li>
                        <li className="text-grey display-30 border-bottom mb-2 pb-2 border-color-light-white">
                          <span>Saturday - Sunday</span>
                          <br />
                          <span className="float-right">7:00 AM - 7:00 PM</span>
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>
                <div className="col-4 bg-white"></div>
              </div>
            </div>
          </section>
          {/* Infor Section End */}
          <br />
          {/* Services Section start */}
          <section className="bg-gold border-bottom">
            <div className="container">
              <div className="mb-5 text-center">
                <h2>SERVICES</h2>
                {/* can add image here <img src="img/content/title-separator.png" alt="..."></img> */}
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4 mb-2-9">
                  <div className="card border-0 border-radius-10 card-style3">
                    <div className="card-img">
                      <img src={Car} alt="..."></img>
                      <span className="icon">
                        <i className="fas fa-car"></i>
                      </span>
                      <div className="card-body pb-2-0 pt-7 px-1-6 px-sm-2-6">
                        <h3 className="h5 mb-3">
                          <h4 className="text-dark">Car/Coupe </h4>
                          <p>Starting at $35.00 </p>
                          <a
                            style={{ textDecoration: "none" }}
                            href="#/"
                            className="text-grey"
                          >
                            More details
                            <i className="fas fa-arrow-circle-right align-middle ml-2">
                              {" "}
                            </i>
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 mb-2-9">
                  <div className="card border-0 border-radius-10 card-style3">
                    <div className="card-img">
                      <img src={SUV} alt="..."></img>
                      <span className="icon">
                        <i className="fas fa-car"></i>
                      </span>
                      <div className="card-body pb-2-0 pt-7 px-1-6 px-sm-2-6">
                        <h3 className="h5 mb-3">
                          <h4 className="text-dark">Small/Mid SUV</h4>
                          <p>Starting at $45.00</p>
                          <a
                            style={{ textDecoration: "none" }}
                            href="#/"
                            className="text-grey"
                          >
                            More details
                            <i className="fas fa-arrow-circle-right align-middle ml-2">
                              {" "}
                            </i>
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 mb-2-9">
                  <div className="card border-0 border-radius-10 card-style3">
                    <div className="card-img">
                      <img src={Truck} alt="..."></img>
                      <span className="icon">
                        <i className="fas fa-truck-monster"></i>
                      </span>
                      <div className="card-body pb-2-0 pt-7 px-1-6 px-sm-2-6">
                        <h3 className="h5 mb-3">
                          <h4 className="text-dark">Large SUV/Truck</h4>
                          <p>Starting at $55.00</p>
                          <a
                            style={{ textDecoration: "none" }}
                            href="#/"
                            className="text-grey"
                          >
                            More details
                            <i className="fas fa-arrow-circle-right align-middle ml-2">
                              {" "}
                            </i>
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Services Section End */}
          {/* Reviews Section Start */}
          <section
            className="bg-img cover-background theme-overlay"
            data-overlay-dark="8"
            style={{ backgroundImage: `url(${testBg})` }}
          >
            <div className="container">
              <div className="mb-5 text-center">
                <h2 className="text-white ">
                  Read what our customers are saying
                </h2>
              </div>
              <div className="owl-theme owl-carousel testimonial-style2 dots-white">
                {/* <div className="row"> */}
                {/* card start */}
                <div className="card border-0">
                  <div className="card-body p-2-0">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="media align-items-center">
                        <img
                          src={face2}
                          alt="..."
                          className="rounded-circle"
                        ></img>
                        <div className="media-body ml-3 mr-3">
                          <h5 className="h6 mb-0">Ashley Lopez</h5>
                          <span>College Student</span>
                        </div>
                      </div>
                      <div>
                        <i className="ti-quote-right display-24 text-primary"></i>
                      </div>
                    </div>
                    <p className="mb-0 display-30">
                      {" "}
                      Awesome and affordable service! A must have for sure.{" "}
                    </p>
                  </div>
                </div>
                {/* card end */}

                {/* card start */}
                <div className="card border-0">
                  <div className="card-body p-2-0">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="media align-items-center">
                        <img
                          src={face2}
                          alt="..."
                          className="rounded-circle"
                        ></img>
                        <div className="media-body ml-3 mr-3">
                          <h5 className="h6 mb-0">Ashley Lopez</h5>
                          <span>College Student</span>
                        </div>
                      </div>
                      <div>
                        <i className="ti-quote-right display-24 text-primary"></i>
                      </div>
                    </div>
                    <p className="mb-0 display-30">
                      {" "}
                      Awesome and affordable service! A must have for sure.{" "}
                    </p>
                  </div>
                </div>
                {/* card end */}

                {/* card start */}
                <div className="card border-0">
                  <div className="card-body p-2-0">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="media align-items-center">
                        <img
                          src={face2}
                          alt="..."
                          className="rounded-circle"
                        ></img>
                        <div className="media-body ml-3 mr-3">
                          <h5 className="h6 mb-0">Ashley Lopez</h5>
                          <span>College Student</span>
                        </div>
                      </div>
                      <div>
                        <i className="ti-quote-right display-24 text-primary"></i>
                      </div>
                    </div>
                    <p className="mb-0 display-30">
                      {" "}
                      Awesome and affordable service! A must have for sure.{" "}
                    </p>
                  </div>
                </div>
                {/* card end */}
                {/* </div> */}
              </div>
            </div>
          </section>
          {/* Reviews Section End */}
          {/* Gallery Start */}
          <section className="portfolio">
            <div className="container">
              <div className="mb-5 text-center">
                <h2>Gallery</h2>
              </div>
              <div className="row portfolio-gallery">
                <div
                  className="col-sm-6 col-md-4 col-lg-3 mb-1-6"
                  data-src={backCar}
                  data-sub-html="<h4 className='text-white'> Gallery Image #01</h4><p>For Blah Blah</p>"
                >
                  <div className="portfolio-style2">
                    <img className="img-responsive" src={backCar} alt="..." />
                    <div className="item-img-overlay d-flex">
                      <div className="justify-content-center align-self-center mx-auto">
                        <i className="fa fa-search-plus"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-sm-6 col-md-4 col-lg-3 mb-1-6"
                  data-src={frontCar}
                  data-sub-html="<h4 className='text-white'> Gallery Image #01</h4><p>For Blah Blah</p>"
                >
                  <div className="portfolio-style2">
                    <img className="img-responsive" src={frontCar} alt="..." />
                    <div className="item-img-overlay d-flex">
                      <div className="justify-content-center align-self-center mx-auto">
                        <i className="fa fa-search-plus"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-sm-6 col-md-4 col-lg-3 mb-1-6"
                  data-src={interiorCar}
                  data-sub-html="<h4 className='text-white'> Gallery Image #01</h4><p>For Blah Blah</p>"
                >
                  <div className="portfolio-style2">
                    <img
                      className="img-responsive"
                      src={interiorCar}
                      alt="..."
                    />
                    <div className="item-img-overlay d-flex">
                      <div className="justify-content-center align-self-center mx-auto">
                        <i className="fa fa-search-plus"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Gallery  End */}
          {/* Call to Action Banner Start */}
          <section
            className="bg-img cover-background theme-overlay"
            data-overlay-dark="8"
            style={{ backgroundImage: `url(${wash})` }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7 col-md-10 text-center">
                  <h2 className="text-white mb-4">
                    {" "}
                    Make sure to call us at 323-495-0763 to schedule your
                    cleaning today!{" "}
                  </h2>
                  <a href="/" className="butn white">
                    {" "}
                    Contact US{" "}
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* Call to Action Banner End */}
          {/* Contact Form Start */}
          <section>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="pl-lg-1-9">
                    <h2>Get a free quote!</h2>
                    <form
                      className="quform"
                      action="/"
                      method="post"
                      encType="multipart/form-data"
                      onClick=""
                    >
                      <div className="quform-elements">
                        <div className="row">
                          {/* Input start */}
                          <div className="col-md-6">
                            <div className="quform-element form-group">
                              <label for="name">
                                {" "}
                                Your Full Name
                                <span className="quform-required">* </span>
                              </label>
                              <div className="quform-input">
                                <input
                                  className="form-control"
                                  id="name"
                                  type="text"
                                  name="name"
                                  placeholder="i.e. John Smith"
                                />
                              </div>
                            </div>
                          </div>
                          {/* Input End */}

                          {/* Input start */}
                          <div className="col-md-6">
                            <div className="quform-element form-group">
                              <label for="email">
                                {" "}
                                Your Email
                                <span className="quform-required">* </span>
                              </label>
                              <div className="quform-input">
                                <input
                                  className="form-control"
                                  id="email"
                                  type="email"
                                  name="email"
                                  placeholder="i.e. jsmith@gmail.com"
                                />
                              </div>
                            </div>
                          </div>
                          {/* Input End */}
                          {/* Input start */}
                          <div className="col-md-6">
                            <div className="quform-element form-group">
                              <label for="sunject">
                                {" "}
                                Subject Line
                                <span className="quform-required">* </span>
                              </label>
                              <div className="quform-input">
                                <input
                                  className="form-control"
                                  id="subject"
                                  type="text"
                                  name="subject"
                                  placeholder="Clean my ride please!"
                                />
                              </div>
                            </div>
                          </div>
                          {/* Input End */}
                          {/* Input start */}
                          <div className="col-md-6">
                            <div className="quform-element form-group">
                              <label for="phone">
                                {" "}
                                Your Phone Number
                                <span className="quform-required">* </span>
                              </label>
                              <div className="quform-input">
                                <input
                                  className="form-control"
                                  id="phone"
                                  type="text"
                                  name="phone"
                                  placeholder="323-495-0763"
                                />
                              </div>
                            </div>
                          </div>
                          {/* Input End */}
                          {/* Input start */}
                          <div className="col-md-12">
                            <div className="quform-element form-group">
                              <label for="message">
                                {" "}
                                Message
                                <span className="quform-required">* </span>
                              </label>
                              <div className="quform-input">
                                <textarea
                                  className="form-control"
                                  id="message"
                                  name="message"
                                  rows="3"
                                  placeholder="What kind of car do you have? What kind of cleaning do you need today?"
                                />
                              </div>
                            </div>
                          </div>
                          {/* Input End */}
                          {/* Submit start */}
                          <div className="col-md-12">
                            <div className="quform-submit-inner">
                              <button className="butn theme butn-md" type="submit">
                                <span>
                                  Send Message
                                </span>
                              </button>
                            </div>
                            <div className="quform-loading-wrap text-left">
                              <span className="quform-loading">
                              </span>
                            </div>
                          </div>
                          {/* Submit end */}
                          
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Contact Form End */}
            {/* Footer Start */}
            <footer className="bg-dark-blue">
              <div className="py-4 border-top border-color-light-white">
                <div className="container">
                  <div className="text-center">
                    <p className="mb-0 text-white opacity9">
                      &copy; 2021 J's Mobile Detailing
                      <br />
                      Website created by: 
                      <a href="https://www.carlosjaraportfolio.com/" className="text-primary text-white-hover">Carlos Jara</a>
                    </p>

                  </div>

                </div>

              </div>

            </footer>
            {/* Footer End */}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
