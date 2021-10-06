import React from "react";
import Car from "../../img/services/servicesCar.jpg";
import SUV from "../../img/services/servicesSUV.jpg";
import Truck from "../../img/services/servicesTruck.jpg";
import "./services.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// const services = () => {
class services extends React.Component {
  state={
    modal: false
  }

  toggleOpen = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  toggleClose = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  render() {
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
                          onClick={this.toggleOpen}
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

                <Modal isOpen={this.state.modal} 
                // toggle={toggle}
                 className
                // data-backdrop="false"
                // style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}
                 >
                  <ModalHeader 
                  // toggle={toggle}
                  >Modal title</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" 
                    // onClick={toggle}
                    >
                      Do Something
                    </Button>{" "}
                    <Button color="secondary" 
                    // onClick={toggle}
                    >
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
      </React.Fragment>
    );
  }
  // }
}

export default services;
