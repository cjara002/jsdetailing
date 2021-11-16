import React from "react";
import "./services.css";
import carContent from "./carContent";
import truckContent from "./truckContent";
import suvContent from "./suvContent";
import ContentCard from "./contentCard";


const tableOfServices = () => {

  return (
    <React.Fragment>
      <div className="box-hover bg-dark">
        <div className="container">
          <div className="mb-5 text-center">
            <h2 className="text-white">
              Services - <span className="text-gold">Car</span>
            </h2>
          </div>
          <div className="row price position-relative text-white">
          <ContentCard content={carContent}/>
          </div>
        </div>
      </div>

      <div className="box-hover bg-dark">
        <div className="container">
          <div className="mb-5 text-center">
            <h2 className="text-white">
              Services - <span className="text-gold">SUV</span>
            </h2>
          </div>
          <div className="row price position-relative text-white">
          <ContentCard content={suvContent}/>
          </div>
        </div>
      </div>

      <div className="box-hover bg-dark">
        <div className="container">
          <div className="mb-5 text-center">
            <h2 className="text-white">
              Services - <span className="text-gold">Truck</span>
            </h2>
          </div>
          <div className="row price position-relative text-white">
          <ContentCard content={truckContent}/>
          </div>
        </div>
      </div>
      
    </React.Fragment>
  );
};

export default tableOfServices;
