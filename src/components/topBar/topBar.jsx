import React from "react";

const topBar = () => {
  return (<React.Fragment>
      <div id="top-bar" className="bg-primary  d-md block">
        <div className="container">
          <div className="row">
            {/* Phone and email start */}
            <div className="col-md-9 col-xs-12">
              <div className="top-bar-info">
                <ul class="list-unstyled">
                  <li className="border-right text-white">
                    <i className="fas fa-phone text-white"></i>
                    323-495-0763
                  </li>
                  <li className="border-right text-white">
                    <i className="fas fa-phone text-white"></i>
                    needabusinessemail@gmail.com
                  </li>
                </ul>
              </div>
            </div>
            {/* Phone and email end */}
            {/* Social media links start */}
            <div className="col-md-3 col-xs-12">
              <div>
                <ul className="top-social-icon mb-0">
                  <li>
                    <a href="/">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Social media links end */}
          </div>
        </div>
      </div>;
  </React.Fragment>
  )}
export default topBar;
