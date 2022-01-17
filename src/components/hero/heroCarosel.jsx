import React from "react";
import "./hero.css";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import Content from "./content";
import {Link} from "react-router-dom";


const heroCarosel = () => {
  return (
    <React.Fragment>
      <div className="screen-height">
        <div className="slider-fade3 h-100">
          <div className="owl-carousel owl-theme w-100 h-100">
            <Slider  autoplay={3000}>
              {Content.map((content, index) => (
                <div
                  key={index}
                  className={content.fontPosition}
                  data-overlay-dark="6"
                  style={{
                    backgroundImage: `url(${content.imageBg})`,
                  }}
                >
                  <div className="container h-100" >
                    <div className="d-table h-100 w-100" >
                      <div className="d-table-cell align middle caption" >
                        <div className="overflow-hidden w-95 w-md-85 w-lg-80" >
                           
                              <h3 className="text-gold mb-3" style={{textTransform: "uppercase", fontWeight: "bold"}}>{content.description}</h3>
                              <h1 className="text-white mb-4 w-85" >{content.title}</h1>
                              {/* Can't get the link to appear and disappear */}
                              <Link to={content.source} className="butn gold buttonAnimation">Learn More</Link>
                         
                        </div>
                        <section className="photoDetails">
                          <span>
                            Photo by 
                            <strong>
                            <a id="photoLink" href={content.linkToProfile} target="blank">  {content.photographer} </a>
                            </strong>
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
export default heroCarosel;
