import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import NavBar from "./components/navBar/navBar.jsx";
import Gallery2 from "./components/gallery/gallery2.jsx";
import Footer from "./components/footer/footer.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/home";
import TableOfServices from "./components/services/tableOfServices";
import HeroBannerSlides from "./components/hero/heroBannerSlides.jsx";


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="main-wrapper">
            <NavBar />
            <HeroBannerSlides />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/services">
                <TableOfServices />
              </Route>
              <Route exact path="/gallery">
                <Gallery2 />
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
