import React from "react";
import InfoSection from "../infoSection/info";
import Services from "../services/services";
import Gallery2 from "../gallery/gallery2";
import ContactForm2 from "../contact/contactForm2";

const Home = () => {
  return (
    <React.Fragment>
      <InfoSection/>
      <Services />
      <Gallery2 />
      <ContactForm2 />
    </React.Fragment>
  );
};

export default Home;
