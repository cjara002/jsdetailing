import React from "react";

const CTABanner = () => {
  return (
    <React.Fragment>
      {/* Call to Action Banner Start */}
      <section
        className="bg-img cover-background theme-overlay"
        data-overlay-dark="8"
        // style={{ backgroundImage: `url(${wash})` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10 text-center">
              <h2 className="text-white mb-4">
                {" "}
                Make sure to call us at 323-495-0763 to schedule your cleaning
                today!{" "}
              </h2>
              <a href="/" className="butn white">
                {" "}
                Contact US{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action Banner End */}
    </React.Fragment>
  );
};

export default CTABanner;
