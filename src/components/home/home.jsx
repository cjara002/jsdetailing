import React from "react";
import InfoSection from "../infoSection/info";
import Services from "../services/services";
import Gallery2 from "../gallery/gallery2";
// import ContactForm2 from "../contact/contactForm2";
import ContactForm from "../contact/contactForm";

const Home = () => {
  return (
    <React.Fragment>
      <InfoSection />
      <Services />
      <Gallery2 />
      {/* <ContactForm2 /> */}
      <ContactForm />
    </React.Fragment>
  );
};

export default Home;
