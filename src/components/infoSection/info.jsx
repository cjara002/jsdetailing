import React from "react";
import Time from "../../img/info/time2.png";
import Person from "../../img/info/person.png";
import Wash from "../../img/info/washing.png";
import "./info.css";
import Fade from 'react-reveal/Fade';

const info = () => {
  return (
    <React.Fragment>
      <section className="pb-0 p-lg-0 feature-box-03 bg-lightGold">
      <Fade bottom>
        <div className="container position-relative z-index-9">
          <div className="row g-0">
            <div className="col-lg-4 bg-lightGold">
              <div className="p-2-0 p-xl-5 h-100">
                <span className="mb-4 d-inline-block">
                  <img src={Person} alt="..." />
                </span>
                <h3 className="mb-4 text-grey">Services</h3>
                <p className="text-grey display-30 infoText" >
                  <ul className='list-unstyled'>
                    <li>
                      <span>Express Wash</span>
                      <span className="float-right">Ceramic Coatings</span>
                    </li>

                    <li>
                      <span>Decontamination</span>
                      <span className="float-right">Wax & Polish</span>
                    </li>

                    <li>
                      <span>Shampoo Interior</span>
                      <span className="float-right">Remove Pet Hair</span>
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            <div className="col-lg-4 bg-gold">
              <div className="p-2-0 p-xl-5 h-100">
                <span className="mb-4 d-inline-block">
                  <img src={Time} alt="..." />
                </span>
                <h3 className=" mb-4 text-white">Operating Hours</h3>
                <ul className="mb-0 list-unstyled infoText">
                  <li className="text-white display-30 border-bottom mb-2 pb-2 border-color-light-white">
                    <span>Monday - Friday</span>
                    <span className="float-right">4:00 PM - 6:00 PM</span>
                  </li>
                  <li className="text-white display-30 border-bottom mb-2 pb-2 border-color-light-white">
                    <span>Saturday - Sunday</span>
                    <span className="float-right">7:00 AM - 7:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 bg-lightGold">
              <div className="p-2-0 p-xl-5 h-100">
                <span className="mb-4 d-inline-block">
                  <img src={Wash} alt="..." />
                </span>
                <h3 className=" mb-4 text-grey">Book An Appointment </h3>
                <p className="text-grey display-30 infoText">
                  Let's us know how we can help you. To make an appointment, call 424-295-9452 or book below.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      </section>
    </React.Fragment>
  );
};

export default info;
