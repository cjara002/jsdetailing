import React from "react";
import Gallery from "react-grid-gallery";
import GalleryContent from "./galleryContent";
import "./gallery.css";

const gallery2 = () => {

  return (
    <React.Fragment>
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
