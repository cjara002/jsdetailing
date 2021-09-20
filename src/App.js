import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import NavBar from "./components/navBar/navBar.jsx";
import HeroBanner2 from "./components/hero/heroCarosel";
import InfoSection from "./components/infoSection/info";
import Services from "./components/services/services.jsx";
import Gallery2 from "./components/gallery/gallery2.jsx";
import ContactForm from "./components/contact/contactForm.jsx";
import Footer from "./components/footer/footer.jsx";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-wrapper">
          <NavBar />
          <HeroBanner2 /> 
          <InfoSection /> 
          <Services />
          <Gallery2/>
          <ContactForm />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
