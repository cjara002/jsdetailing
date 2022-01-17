import React from "react";
import Slider from "react-animated-slider";
import "./SlideStyle.css";
import "react-animated-slider/build/horizontal.css";
import Content from "./content";

const heroBannerSlides = () => {
return(
    <React.Fragment>
         {/* DashBoard Slider */}
        <div className="screen-height">
             <div className="slider-fade h-100">
                 <div className="owl-carousel owl-theme w-100 h-100">
                    <Slider autoplay={3000}>
                      {Content.map((content, index) => (
                        <div
                          key={index}
                          className="sliderContent"
                          style={{
                            background: `url('${content.imageBg}')`
                          }}
                        >
                          <div className="sliderInnerSection">
                            <h1 className="sliderH1">{content.title}</h1>
                            <p className="sliderP">{content.description}</p>
                            <button
                              className="sliderButton"
                            //   onClick={() => this.toSelected(opportunity.id)}
                            >
                              {" "}
                              Learn More
                            </button>
                          </div>
                          <section className="sliderSection">
                            {/* <img src={article.profileImage} alt={article.user} className="sliderImg"/> */}
                            <span className="sliderSpan">
                              Photo by <br />
                              <strong style={{ color: "#FFFFFF" }}>
                                {" "}
                                {content.photographer}
                              </strong>{" "}
                              <br />
                              {content.linkToProfile}
                            </span>
                          </section>
                        </div>
                      ))}
                    </Slider>
                  </div>
             </div>
        </div>
    </React.Fragment>
)
}

export default heroBannerSlides;