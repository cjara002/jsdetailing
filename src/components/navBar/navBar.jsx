import React, { useState } from "react";
import TopBar from "../topBar/topBar";
import JlogTrans from "../../img/logo/jsLogoTransWhite.png";
import "./navBar.css";
import HambugerMenu from "./hambugerMenu";
import BookingModal from "../modal/bookingModal";
import {Link} from "react-router-dom";

const NavBar = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  return (
    <React.Fragment>
      <header className="header-style3 header-custom">
        <TopBar />
        <div className="navbar-default">
          <div className="container" style={{ maxWidth: "100%" }}>
            <div className="row align-items-center">
              <div className="col-12">
                <div className="menu_area alt-font">
                  <nav className="navbar navbar-expand-lg navbar-light p-0 d-flex justify-content-between ">
                    <HambugerMenu />
                    <div
                      className="navbar-header navbar-header-custom"
                      id="nav"
                    >
                      <a
                        href="/"
                        className="navbar-brand xs-width-145px d-inline-block mr-lg-0"
                      >
                        <img
                          src={JlogTrans}
                          alt="logo"
                          id="logo"
                          style={{ maxHeight: "100%" }}
                        />
                      </a>
                    </div>
                    <ul className="navbar-nav ml-auto" id="nav">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/services">Services</Link>
                      </li>
                      <li>
                        <Link to="/gallery">Gallery</Link>
                      </li>
                    </ul>
                    {/* <div className="attr-nav">
                      <ul>
                        <li class="ml-2" onClick={toggle}>
                          <a
                            href="#!"
                            class="butn appointment"
                            data-toggle="tooltip"
                            title="Book Now"
                          >
                            <i class="far fa-calendar-plus mr-1 align-middle display-28"></i>{" "}
                            <span class="alt-font align-middle  d-xxl-inline-block">
                              Book Now
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </nav>
                </div>
              </div>
            </div>
            <BookingModal toggle={toggle} modal={modal}/>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default NavBar;
