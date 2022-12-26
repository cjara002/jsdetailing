import React from "react";
import Gallery from "react-grid-gallery";
import GalleryContent from "./galleryContent";
import "./gallery.css";
import Fade from 'react-reveal/Fade';

const gallery2 = () => {

  return (
    <React.Fragment>
            <section className="pb-0 p-lg-0 feature-box-03 bg-lightGold">
      <Fade bottom>
        <div className="container position-relative z-index-9">
          <div className="row g-0">
            <div className="col-lg-12 bg-gold">
              <div className="p-2-0 p-xl-5 h-100">
                <span className="mb-4 d-inline-block">
                  {/* <img src={Time} alt="..." /> */}
                </span>
                <h3 className=" mb-4 text-white">Can I see some of your work?</h3>
                <p className="text-white display-30 infoText">
                I post my work on this webpage, along with my instagram and my yelp page.
                <br />
                If you have any questions, you can reach me through this site or by caling me.
                I am always happy to help!
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      </section>
      <section className="portfolio">
            <div className="container">
              <div className="mb-5 text-center">
                <h2>Gallery</h2>
              </div>
              <div className="row portfolio-gallery">
              <Gallery images={GalleryContent} enableImageSelection={false}/>
                </div>
              </div>
          </section>
      
    </React.Fragment>
  );
};

export default gallery2;
