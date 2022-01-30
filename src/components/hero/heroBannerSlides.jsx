import React from "react";
import Slider from "react-animated-slider";
import "./SlideStyle.css";
import "react-animated-slider/build/horizontal.css";
import Content from "./content";
import { Link } from "react-router-dom";

const heroBannerSlides = () => {
  return (
    <React.Fragment>
      {/* DashBoard Slider */}
      <div className="screen-height">
        <div className="slider-fade3 h-100">
          <div className="owl-carousel owl-theme w-100 h-100">
            <Slider autoplay={3000}>
              {Content.map((content, index) => (
                <div
                  key={index}
                  className="sliderContent h-100 cover-background"
                  data-overlay-dark="6"
                  style={{
                    background: `url('${content.imageBg}') center`,
                  }}
                >
                  <div className="container h-100">
                    <div className="d-table h-100 w-100">
                      <div className="overflow-hidden w-95 w-md-85 w-lg-80">
                        <div className="sliderInnerSection">
                          <h3 className="sliderH3 text-gold mb-3">
                            {content.description}
                          </h3>
                          <h1 className="sliderH1 mb-4 w-85">
                            {content.title}
                          </h1>
                          <div className="buttonWrap">
                            <Link
                              to={content.source}
                              className="butn gold sliderButton"
                            >
                              Learn More
                            </Link>
                          </div>

                        </div>
                        {/* <section className="sliderSection"> */}
                        <section className="photoDetails d-none d-sm-block">
                          {/* <span className="sliderSpan"> */}
                          <span className="sliderSpan">
                            Photo by <br />
                            <strong>
                              <a
                                id="photoLink"
                                href={content.linkToProfile}
                                target="blank"
                              >
                                {" "}
                                {content.photographer}{" "}
                              </a>

                              {/* {content.photographer} */}
                            </strong>{" "}
                            {/* <br /> */}
                            {/* {content.linkToProfile} */}
                          </span>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default heroBannerSlides;
