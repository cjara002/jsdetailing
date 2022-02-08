import React from "react";
import InfoSection from "../infoSection/info";
import Services from "../services/services";
import Gallery2 from "../gallery/gallery2";
import ContactForm2 from "../contact/contactForm2";
// import ContactForm from "../contact/contactForm";
// import PContactForm from "../contact/portfolioContactForm";

const Home = () => {
  return (
    <React.Fragment>
      <InfoSection />
      <Services />
      <Gallery2 />
      {/* <ContactForm /> */}
      <ContactForm2 />
      {/* <PContactForm /> */}
    </React.Fragment>
  );
};

export default Home;
