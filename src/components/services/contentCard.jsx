import React from "react";

const contentCard = (props) => {
    return (
        <React.Fragment>
            {props.content.map((car, index) => (
              <div key={index} className={car.columnProps}>
                <div className="item text-center active">
                  <div className="type">
                    <h4>{car.nameOfPackage}</h4>
                  </div>
                  <div className="value">
                    <h3>
                      {car.price}
                      <span>$</span>
                    </h3>
                    <span className="per">.00</span>
                  </div>
                  <div className="features">
                    <ul className="list-unstyled">
                      {car.description.map((description, index) => (
                        <li key={index}>{description}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="order">
                    {/* <a href="#!" className="butn">
                      Time: {car.time}
                    </a> */}
                    {/* <h5>Time: {car.time}</h5> */}
                  </div>
                </div>
              </div>
            ))}
        </React.Fragment>
    )
}

export default contentCard;