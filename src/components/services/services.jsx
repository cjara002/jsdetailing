import React from "react";
import Car from "../../img/services/servicesCar.jpg";
import SUV from "../../img/services/servicesSUV.jpg";
import Truck from "../../img/services/servicesTruck.jpg"
import "./services.css";


const services = () => {
    return (
        <React.Fragment>
          <section className="bg-gold border-bottom">
            <div className="container">
              <div className="mb-5 text-center">
                <h2 className="text-white">SERVICES</h2>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4 mb-2-9">
                  <div className="card border-0 border-radius-10 card-style3">
                    <div className="card-img">
                      <img src={Car} alt="..."></img>
                      <span className="icon">
                        <i className="fas fa-car"></i>
                      </span>
                      <div className="card-body pb-2-0 pt-7 px-1-6 px-sm-2-6">
                        <h3 className="h5 mb-3">
                          <h4 className="text-dark">Car/Coupe </h4>
                          <p>Starting at $35.00 </p>
                          <a
                            style={{ textDecoration: "none" }}
                            href="#/"
                            className="text-grey"
                          >
                            More details
                            <i className="fas fa-arrow-circle-right align-middle ml-2">
                              {" "}
                            </i>
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                <br />
                </div>
                <div className="col-md-6 col-lg-4 mb-2-9">
                  <div className="card border-0 border-radius-10 card-style3">
                    <div className="card-img">
                      <img src={SUV} alt="..."></img>
                      <span className="icon">
                        <i className="fas fa-truck-pickup"></i>
                      </span>
                      <div className="card-body pb-2-0 pt-7 px-1-6 px-sm-2-6">
                        <h3 className="h5 mb-3">
                          <h4 className="text-dark">Small/Mid SUV</h4>
                          <p>Starting at $45.00</p>
                          <a
                            style={{ textDecoration: "none" }}
                            href="#/"
                            className="text-grey"
                          >
                            More details
                            <i className="fas fa-arrow-circle-right align-middle ml-2">
                              {" "}
                            </i>
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                <br />
                </div>
                <div className="col-md-6 col-lg-4 mb-2-9">
                  <div className="card border-0 border-radius-10 card-style3">
                    <div className="card-img">
                      <img src={Truck} alt="..."></img>
                      <span className="icon">
                        <i className="fas fa-truck-monster"></i>
                      </span>
                      <div className="card-body pb-2-0 pt-7 px-1-6 px-sm-2-6">
                        <h3 className="h5 mb-3">
                          <h4 className="text-dark">Large SUV/Truck</h4>
                          <p>Starting at $55.00</p>
                          <a
                            style={{ textDecoration: "none" }}
                            href="#/"
                            className="text-grey"
                          >
                            More details
                            <i className="fas fa-arrow-circle-right align-middle ml-2">
                              {" "}
                            </i>
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
    )
}

export default services;