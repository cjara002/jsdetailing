import React from "react";
import Audi from "../../img/banner/audiBannerCustom.jpg";
import Customer from "../../img/banner/customerBanner.jpg";
import Interior from "../../img/banner/interiorBanner.jpg";

const heroBannerStatic = () => {
  return (
    <React.Fragment>
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

            <div
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
            </div>
          </div>
        </div>
    </div>
    </React.Fragment>
  );
};

export default heroBannerStatic;
