import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  //   MDBNavLink,
  MDBCollapse,
  MDBContainer,
  MDBHamburgerToggler,
} from "mdbreact";
// import { BrowserRouter as Router } from "react-router-dom";
import JlogTrans from "../../img/logo/jsLogoTrans.png";
import "./navBar.css";
import {Link} from "react-router-dom"; 

class hambugerMenu extends Component {
  state = {
    collapse1: false,
    collapseID: "",
  };

  toggleCollapse = (collapseID) => () => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));
  };

  toggleSingleCollapse = (collapseId) => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId],
    });
  };

  render() {
    return (
      //   <Router>
      <MDBContainer className="hamburgerMenu">
        <MDBNavbar color="white" style={{ marginTop: "20px" }} light>
          <MDBContainer>
            <MDBNavbarBrand>
              <img
                src={JlogTrans}
                alt="logo"
                id="logo"
                style={{ maxHeight: "100%" }}
              />
            </MDBNavbarBrand>
            <MDBHamburgerToggler
              color="#2E2E2E"
              id="hamburger3"
              onClick={() => this.toggleSingleCollapse("collapse1")}
            />
            <MDBCollapse isOpen={this.state.collapse1} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
               <Link to="/">Home</Link> 
                </MDBNavItem>
                <MDBNavItem>
               <Link to="/services">Services</Link> 
                </MDBNavItem>
                <MDBNavItem>
                <Link to="/gallery">Gallery </Link>
                </MDBNavItem>
                <MDBNavItem>
                <Link to="/contact">Contact Us </Link>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
      //   </Router>
    );
  }
}

export default hambugerMenu;
