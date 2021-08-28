import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
// import Car from "./img/services/servicesCar.jpg";
// import SUV from "./img/services/servicesSUV.jpg";
// import Truck from "./img/services/servicesTruck.jpg";
import testBg from "./img/testimonial/washCar.jpg";
import face2 from "./img/testimonial/smallFace.jpg";
import backCar from "./img/gallery/BackBeforeAndAfter.jpg";
import frontCar from "./img/gallery/FrontBeforeAndAfter.jpg";
import interiorCar from "./img/gallery/InteriorBeforeAndAfter.jpg";
import wash from "./img/CTA/carWash.jpg";
import NavBar from "./components/navBar/navBar.jsx";
// import HeroBanner from "./components/hero/heroBannerStatic";
import HeroBanner2 from "./components/hero/heroCarosel";
import InfoSection from "./components/infoSection/info";
import Services from "./components/services/services.jsx";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-wrapper">
          <NavBar />
          <HeroBanner2 /> 
          <InfoSection /> 
          <Services />

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
                              <button
                                className="butn theme butn-md"
                                type="submit"
                              >
                                <span>Send Message</span>
                              </button>
                            </div>
                            <div className="quform-loading-wrap text-left">
                              <span className="quform-loading"></span>
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
                    <a
                      href="https://www.carlosjaraportfolio.com/"
                      className="text-primary text-white-hover"
                    >
                      Carlos Jara
                    </a>
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
