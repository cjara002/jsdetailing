import React from "react";
import Jlogo from "../../img/JLogo.JPG";
import "./monster.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Monster extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="header-style3 header-custom">
            {/* bar above nav start */}
            <div id="top-bar" className="bg-primary d-none d-md block">
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
            </div>
            {/* bar above nav start */}

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
                            <img src={Jlogo} alt="logo"  id="logo"/>
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
      </React.Fragment>
    );
  }
}

export default Monster;
