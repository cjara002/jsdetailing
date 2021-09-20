import React from "react";
import backCar from "../../img/gallery/BackBeforeAndAfter.jpg";
import frontCar from "../../img/gallery/FrontBeforeAndAfter.jpg";
import interiorCar from "../../img/gallery/InteriorBeforeAndAfter.jpg";

const gallery1 = () => {
    return(
          <section className="portfolio">
            <div className="container">
              <div className="mb-5 text-center">
                <h2>Gallery</h2>
              </div>
              <div className="row portfolio-gallery">
                <div
                  className="col-sm-6 col-md-4 col-lg-3 mb-1-6"
                  data-src={backCar}
                  data-sub-html="<h4 className='text-white'> Gallery Image #01</h4><p>For Blah Blah</p>"
                >
                  <div className="portfolio-style2">
                    <img className="img-responsive" src={backCar} alt="..." />
                    <div className="item-img-overlay d-flex">
                      <div className="justify-content-center align-self-center mx-auto">
                        <i className="fa fa-search-plus"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-sm-6 col-md-4 col-lg-3 mb-1-6"
                  data-src={frontCar}
                  data-sub-html="<h4 className='text-white'> Gallery Image #01</h4><p>For Blah Blah</p>"
                >
                  <div className="portfolio-style2">
                    <img className="img-responsive" src={frontCar} alt="..." />
                    <div className="item-img-overlay d-flex">
                      <div className="justify-content-center align-self-center mx-auto">
                        <i className="fa fa-search-plus"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-sm-6 col-md-4 col-lg-3 mb-1-6"
                  data-src={interiorCar}
                  data-sub-html="<h4 className='text-white'> Gallery Image #01</h4><p>For Blah Blah</p>"
                >
                  <div className="portfolio-style2">
                    <img
                      className="img-responsive"
                      src={interiorCar}
                      alt="..."
                    />
                    <div className="item-img-overlay d-flex">
                      <div className="justify-content-center align-self-center mx-auto">
                        <i className="fa fa-search-plus"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    )
}

export default gallery1;