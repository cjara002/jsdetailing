import React from "react";
import "./topBar.css"

const topBar = () => {
  return (
    <React.Fragment>
      <div id="top-bar" className="bg-white d-none d-md-block">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-xs-12">
              <div className="top-bar-info">
                <ul class="list-unstyled">
                  <li className="border-right">
                    <i className="fas fa-phone"></i>
                    <span className="text-gold"> 323-495-0763</span>
                  </li>
                  <li className="border-right">
                    <i className="fas fa-envelope"></i>
                    <span className="text-gold">
                      {" "}
                      needabusinessemail@gmail.com
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-xs-12">
              <div>
                <ul className="top-social-icon mb-0">
                  <li>
                    <a
                      href="https://www.facebook.com/Js-Mobile-Detailing-Compton-CA-108770091505804"
                      target="blank"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.yelp.com/biz/js-mobile-detailing-compton"
                      target="blank"
                    >
                      <i className="fab fa-yelp"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/js_mobile_detailing_compton_ca/"
                      target="blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </React.Fragment>
  );
};
export default topBar;
