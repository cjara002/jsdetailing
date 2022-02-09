import React from "react";
import "./form.css";
import Logo from "../../img/logo/jsLogoTrans.png";
// import 'bootstrap/dist/css/bootstrap.min.css';
import lights from "../../img/contactForm/contactLights.jpg";
import Swal from "sweetalert2";

class ContactForm2 extends React.Component {
  state = {
    name: " ",
    email: " ",
    subject: "",
    phone: " ",
    message: " ",
  };

  encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  handleSubmit = (event) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": "contact", ...this.state })
    })
      .then(this.onSuccessSubmission)
      .catch(this.onErrorSubmission);
    event.preventDefault();
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSuccessSubmission = () => {
    Swal.fire({
      icon: "success",
      title: "Thank you for your message!",
      text: "We will reach out to you soon. Feel free to look at our work on our Instagram page!",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  onErrorSubmission = () => {
    Swal.fire({
      icon: "error",
      title: "Oh no! It is broken!",
      text: "Not sure what went wrong. Please try the number on the website to schedule your appoimnent",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* Contact Form Start */}
        <section
          className="formSection"
          style={{ background: `url(${lights})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="pl-lg-1-9">
                  {/* Image does not show */}
                  <image src={Logo} alt="image" className="mb-4" />
                  <h2 className="text-center">Get A Free Quote!</h2>
                  <form
                    //method="POST"
                    //name="contact"
                    className="quform"
                    //action="/"
                    // encType="multipart/form-data"
                    // data-netlify="true"
                    onSubmit={this.handleSubmit}
                  >
                    <input type="hidden" name="form-name" value="contact"/>
                    <div className="quform-elements">
                      <div className="row">
                        {/* Input start */}
                        <div className="col-md-6">
                          <div className="quform-element form-group">
                            <label for="name" className="text-white">
                              {" "}
                              Full Name
                              <span className="quform-required">* </span>
                            </label>
                            <div className="quform-input">
                              {/* <input value={email} onChange={(event) => setEmail(event.target.value)}> */}

                              <input
                                className="form-control"
                                id="name"
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                        </div>
                        {/* Input End */}

                        {/* Input start */}
                        <div className="col-md-6">
                          <div className="quform-element form-group">
                            <label for="email" className="text-white">
                              {" "}
                              Email
                              <span className="quform-required">* </span>
                            </label>
                            <div className="quform-input">
                              <input
                                className="form-control"
                                id="email"
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                // value={email}
                              />
                            </div>
                          </div>
                        </div>
                        {/* Input End */}
                        {/* Input start */}
                        <div className="col-md-6">
                          <div className="quform-element form-group">
                            <label for="subject" className="text-white">
                              {" "}
                              Subject Line
                              <span className="quform-required">* </span>
                            </label>
                            <div className="quform-input">
                              <input
                                className="form-control"
                                id="subject"
                                type="text"
                                name="subject"
                                value={this.state.subject}
                                onChange={this.handleChange}
                                // value={subject}
                              />
                            </div>
                          </div>
                        </div>
                        {/* Input End */}
                        {/* Input start */}
                        <div className="col-md-6">
                          <div className="quform-element form-group">
                            <label for="phone" className="text-white">
                              {" "}
                              Phone Number
                              <span className="quform-required">* </span>
                            </label>
                            <div className="quform-input">
                              <input
                                className="form-control"
                                id="phone"
                                type="text"
                                name="phone"
                                value={this.state.phone}
                                onChange={this.handleChange}
                                // value={phone}
                              />
                            </div>
                          </div>
                        </div>
                        {/* Input End */}
                        {/* Input start */}
                        <div className="col-md-12">
                          <div className="quform-element form-group">
                            <label for="message" className="text-white">
                              {" "}
                              Message
                              <span className="quform-required">* </span>
                            </label>
                            <div className="quform-input">
                              <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows="3"
                                placeholder="What kind of car do you have? What kind of cleaning do you need today?"
                                value={this.state.message}
                                onChange={this.handleChange}
                                // value={message}
                              />
                            </div>
                          </div>
                        </div>
                        {/* Input End */}
                        {/* Submit start */}
                        <div className="col-md-12">
                          <div className="quform-submit-inner">
                            <button className="butn transparent" type="submit">
                              <span>Send Message</span>
                            </button>
                          </div>
                          <div className="quform-loading-wrap text-left">
                            <span className="quform-loading"></span>
                          </div>
                        </div>
                        {/* Submit end */}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Form End */}
      </React.Fragment>
    );
  }
}

export default ContactForm2;
