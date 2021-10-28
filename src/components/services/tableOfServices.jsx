import React from "react";
import "./services.css";

const tableOfServices = () => {
  return (
    <React.Fragment>
      <div className="box-hover bg-dark">
        <div className="container">
          <div className="mb-5 text-center">
            <h2 className="text-white">
              Services - <span className="text-gold">Car</span>
            </h2>
            <img src="img/content/title-separator.png" alt="..." />
          </div>
          <div className="row price">
            {/* start single item */}
            <div className="col-lg-4 mb-2-9 mb-lg-0">
              <div className="item text-center">
                <div className="type">
                  <h4>Exterior</h4>
                </div>
                <div className="value">
                  <h3>
                    35<span>$</span>
                  </h3>
                  <span className="per">.00</span>
                </div>
                <div className="features">
                  <ul className="list-unstyled">
                    <li>Tire and Wheel Cleaning</li>
                    <li>Pre-Soak</li>
                    <li>Foam Contactless Wash</li>
                    <li>Hand Dry</li>
                    <li>Extrioir Detailer That Repels Dirt And Water</li>
                    <li>All exterior Windows</li>
                  </ul>
                </div>
                <div className="order">
                  <a href="#!" className="butn">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            {/* end single item */}

            {/* start single item */}
            {/* <div className="col-lg-4 mb-2-9 mb-lg-0">
              <div className="item text-center active">
                <div className="type">
                  <h4>Wash & Vacuum</h4>
                </div>
                <div className="value">
                  <h3>
                    40<span>$</span>
                  </h3>
                  <span className="per">.00</span>
                </div>
                <div className="features">
                  <ul className="list-unstyled">
                    <li>Tire and Wheel Cleaning</li>
                    <li>Pre-Soak</li>
                    <li>Foam Contactless Wash</li>
                    <li>Hand Dry</li>
                    <li>Extrioir detailer that repels dirt and water</li>
                    <li>All exterior Windows</li>
                  </ul>
                </div>
                <div className="order">
                  <a href="#!" className="butn">
                    Book Now
                  </a>
                </div>
              </div>
            </div> */}
            {/* end single item */}
            {/* start single item */}
            {/* <div className="col-lg-4">
              <div className="item text-center">
                <div className="type">
                  <h4>Full Interior With Shampoo</h4>
                </div>
                <div className="value">
                  <h3>
                    150<span>$</span>
                  </h3>
                  <span className="per">.00</span>
                </div>
                <div className="features">
                  <ul className="list-unstyled">
                    <li>Fungal allergens scan</li>
                    <li>Pollen allergens test</li>
                    <li>Household allergens</li>
                    <li>Food allergens analyze</li>
                    <li>Allergens drugs scan</li>
                  </ul>
                </div>
                <div className="order">
                  <a href="#!" className="butn">
                    Book Now
                  </a>
                </div>
              </div>
            </div> */}
            {/* end single item */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default tableOfServices;
