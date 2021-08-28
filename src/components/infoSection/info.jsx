import React from "react";
import Time from "../../img/info/time.png";
import Person from "../../img/info/person.png";
import Wash from "../../img/info/washing.png";
import "./info.css";

const info = () => {
  return (
    <React.Fragment>
      <section className="pb-0 p-lg-0 feature-box-03 bg-lightGold">
        <div className="container position-relative z-index-9">
          <div className="row g-0">
            <div className="col-4 bg-lightGold">
              <div className="p-2-0 p-xl-5 h-100">
                <span className="mb-4 d-inline-block">
                  <img src={Person} alt="..." />
                </span>
                <h3 className=" mb-4 text-white">About Us</h3>
                <p className="text-grey display-30">
                  J's Auto Detailing was founded by Carlos Jara. It is the most
                  trusted auto detailing business in the area.
                </p>
              </div>
            </div>

            <div className="col-4 bg-gold">
              <div className="p-2-0 p-xl-5 h-100">
                <span className="mb-4 d-inline-block">
                  <img src={Time} alt="..." />
                </span>
                <h3 className=" mb-4 text-white">Operating Hours</h3>
                <ul className="mb-0 list-unstyled">
                  <li className="text-grey display-30 border-bottom mb-2 pb-2 border-color-light-white">
                    <span>Monday - Friday</span>
                    <span className="float-right">4:00 PM - 6:00 PM</span>
                  </li>
                  <li className="text-grey display-30 border-bottom mb-2 pb-2 border-color-light-white">
                    <span>Saturday - Sunday</span>
                    <span className="float-right">7:00 AM - 7:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-4 bg-lightGold">
              <div className="p-2-0 p-xl-5 h-100">
                <span className="mb-4 d-inline-block">
                  <img src={Wash} alt="..." />
                </span>
                <h3 className=" mb-4 text-white">Book An Appointment </h3>
                <p className="text-grey display-30">
                  Let's us know how we can help you. To make an appointment , call 323-495-0763 or book below.
                </p>
                <a href="#!" className="butn gold" style={{textDecoration: "none"}}>Schedule Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default info;
