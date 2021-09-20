import React from "react";

const testimonials = () => {
    return (
<section
className="bg-img cover-background theme-overlay"
data-overlay-dark="8"
// style={{ backgroundImage: `url(${testBg})` }}
>
<div className="container">
  <div className="mb-5 text-center">
    <h2 className="text-white ">
      Read what our customers are saying
    </h2>
  </div>
  <div className="owl-theme owl-carousel testimonial-style2 dots-white">
    {/* <div className="row"> */}
    {/* card start */}
    <div className="card border-0">
      <div className="card-body p-2-0">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="media align-items-center">
            <img
            //   src={face2}
              alt="..."
              className="rounded-circle"
            ></img>
            <div className="media-body ml-3 mr-3">
              <h5 className="h6 mb-0">Ashley Lopez</h5>
              <span>College Student</span>
            </div>
          </div>
          <div>
            <i className="ti-quote-right display-24 text-primary"></i>
          </div>
        </div>
        <p className="mb-0 display-30">
          {" "}
          Awesome and affordable service! A must have for sure.{" "}
        </p>
      </div>
    </div>
    {/* card end */}

    {/* card start */}
    <div className="card border-0">
      <div className="card-body p-2-0">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="media align-items-center">
            <img
            //   src={face2}
              alt="..."
              className="rounded-circle"
            ></img>
            <div className="media-body ml-3 mr-3">
              <h5 className="h6 mb-0">Ashley Lopez</h5>
              <span>College Student</span>
            </div>
          </div>
          <div>
            <i className="ti-quote-right display-24 text-primary"></i>
          </div>
        </div>
        <p className="mb-0 display-30">
          {" "}
          Awesome and affordable service! A must have for sure.{" "}
        </p>
      </div>
    </div>
    {/* card end */}

    {/* card start */}
    <div className="card border-0">
      <div className="card-body p-2-0">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="media align-items-center">
            <img
            //   src={face2}
              alt="..."
              className="rounded-circle"
            ></img>
            <div className="media-body ml-3 mr-3">
              <h5 className="h6 mb-0">Ashley Lopez</h5>
              <span>College Student</span>
            </div>
          </div>
          <div>
            <i className="ti-quote-right display-24 text-primary"></i>
          </div>
        </div>
        <p className="mb-0 display-30">
          {" "}
          Awesome and affordable service! A must have for sure.{" "}
        </p>
      </div>
    </div>
    {/* card end */}
    {/* </div> */}
  </div>
</div>
</section>
    )}
export default testimonials;         