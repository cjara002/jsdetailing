import React from "react";
import "./services.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "./content";
import Zoom from "react-reveal/Zoom";

const services = () => {
  return (
    <React.Fragment>
      <section className="bg-gold border-bottom">
        <div className="container">
          <div className="mb-5 text-center">
            <h2 className="text-white">SERVICES</h2>
          </div>
          <div className="row">
            {Content.map((content, index) => (
              <Zoom bottom cascade>
                <div className="col-md-6 col-lg-4 mb-2-9" key={index}>
                  <div className="card border-0 border-radius-10 card-style3">
                    <div className="card-img">
                      <img src={content.carImage} alt="..."></img>
                      <span className="icon">
                        <i className={content.icon}></i>
                      </span>
                      <div className="card-body pb-2-0 pt-7 px-1-6 px-sm-2-6">
                        <h3 className="h5 mb-3">
                          <h4 className="text-dark">{content.title} </h4>
                          <p>{content.Description} </p>
                          <a
                            style={{ textDecoration: "none" }}
                            href={content.source}
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
              </Zoom>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
  // }
};

export default services;
