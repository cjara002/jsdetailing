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
