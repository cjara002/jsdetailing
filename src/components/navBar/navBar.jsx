import React, { useState } from "react";
import TopBar from "../topBar/topBar";
import JlogTrans from "../../img/logo/jsLogoTrans.png";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./navBar.css";
import HambugerMenu from "./hambugerMenu";

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
                  <nav className="navbar navbar-expand-lg navbar-light p-0 d-flex justify-content-between">
                    <div className="navbar-header navbar-header-custom" id="nav">
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

                    {/* Does not work */}
                    {/* <div className="navbar-toggler menu-opened"></div> */}
                    {/* <div className="navbar-toggler"></div> */}
                    {/* <ul className="navbar-nav ml-auto" id="nav"> */}

                    < HambugerMenu />
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
                        <a href="#!" className="butn appointment">
                          <i className="fas fa-calendar-day mr-1 align-middle display-28"></i>
                          <span
                            className="alt-font align-middle d-none d-xxl-inline-block"
                            onClick={toggle}
                          >
                            Book Now
                          </span>
                        </a>
                        {/* <Button onClick={toggle}>Modal Here </Button> */}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Modal isOpen={modal} toggle={toggle} className="modalBg">
        <ModalHeader toggle={toggle} className>
          Modal title
        </ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default NavBar;
