import React from "react";
import "./services.css";
import carContent from "./carContent";
import truckContent from "./truckContent";
import suvContent from "./suvContent";
import ContentCard from "./contentCard";
import Fade from 'react-reveal/Fade';


const tableOfServices = () => {

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
                <h3 className=" mb-4 text-white">What kind of service do I need?</h3>
                <p className="text-white display-30 infoText">
                You can never go wrong with an Express Wash! 
                For my car enthusiast, I would recommend getting the Wash and Vacuum.
                If you have kids or you just got a used car, I would reommended getting the Shampoo Package.
                <br />
                We can come to you and clean your vehicle while you relax in your home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      </section>
      <div className="box-hover bg-dark">
        <div className="container">
          <div className="mb-5 text-center">
            <h2 className="text-white">
              Services - <span className="text-gold text-bold">Car</span>
            </h2>
          </div>
          <Fade bottom>
          <div className="row price position-relative text-white">
          <ContentCard content={carContent}/>
          </div>
          </Fade>
        </div>
        <br />
      </div>

      
      <div className="box-hover bg-dark">
        <div className="container">
          <div className="mb-5 text-center">
            <h2 className="text-white">
              Services - <span className="text-gold">SUV</span>
            </h2>
          </div>
          <Fade bottom>
          <div className="row price position-relative text-white">
          <ContentCard content={suvContent}/>
          </div>
          </Fade>
        </div>
        <br />
      </div>

      
      <div className="box-hover bg-dark">
        <div className="container">
          <div className="mb-5 text-center">
            <h2 className="text-white">
              Services - <span className="text-gold">Truck</span>
            </h2>
          </div>
          <Fade bottom>
          <div className="row price position-relative text-white">
          <ContentCard content={truckContent}/>
          </div>
          </Fade>
        </div>
        <br />
      </div>
    </React.Fragment>
  );
};

export default tableOfServices;
