import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import NavBar from "./components/navBar/navBar.jsx";
import HeroBanner2 from "./components/hero/heroCarosel";
// import HeroBannerStatic from "./components/hero/heroBannerStatic";
// import InfoSection from "./components/infoSection/info";
// import Services from "./components/services/services.jsx";
import Gallery2 from "./components/gallery/gallery2.jsx";
// import ContactForm from "./components/contact/contactForm.jsx";
import ContactForm2 from "./components/contact/contactForm2.jsx";
import Footer from "./components/footer/footer.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/home";
import TableOfServices from "./components/services/tableOfServices";

// var IgFeed = require("./components/gallery/galleryInstagram.html");

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="main-wrapper">
            <NavBar />
            <HeroBanner2 />
            {/* <HeroBannerStatic /> */}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/services">
                <TableOfServices />
              </Route>
              <Route exact path="/gallery">
                <Gallery2 />
                {/* <iframe title = "Ig Feed for ..."src={IgFeed}></iframe> */}
              </Route>
              <Route exact path="/contact">
                <ContactForm2 />
              </Route>
            </Switch>
            <Footer />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
