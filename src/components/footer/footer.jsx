import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <React.Fragment>
      <footer className="bg-dark">
        <div className="py-4 border-top border-color-light-white">
          <div className="container">
            <div className="text-center">
              <p className="mb-0 text-grey opacity9">
                &copy; 2021 J's Mobile Detailing
                <br />
                Website created by:
                <br />

                <a
                  href="https://www.carlosjaraportfolio.com/"
                  className="text-grey"
                  target="blank"
                  style={{textDecoration: "none"}}
                >
                  Carlos Jara
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer End */}
    </React.Fragment>
  );
};

export default footer;
