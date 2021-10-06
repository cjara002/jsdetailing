import React, { useState } from "react";
import "./form.css";
import Logo from "../../img/logo/jsLogoTrans.png";
// import 'bootstrap/dist/css/bootstrap.min.css';
import lights from "../../img/contactForm/contactLights.jpg";


const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const onSubmit = event => {
        // event.preventDefault();
        console.log("on Submit:", ...this.state)
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encodeURI({ "form-name": "contact", ...this.state }),
            })
              .then(() => alert("Success!"))
              .catch((error) => alert(error));
            event.preventDefault();
    }
  return (
    <React.Fragment>
      {/* Contact Form Start */}
      <section className="formSection" style={{background: `url(${lights})` }}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="pl-lg-1-9">
                  {/* Image does not show */}
                <image src={Logo} alt="image" className="mb-4" />
                <h2 className="text-center">Get A Free Quote!</h2>
                {/* EXAMPLE
                    <form
                      method="POST"
                      name="contact"
                      action="/success/"
                      id="formContact"
                      data-netlify="true"
                    > */}
                <form
                  method="POST"
                  name="contact"
                  className="quform"
                  action="/"
                  encType="multipart/form-data"
                  data-netlify="true"
                  onSubmit={onSubmit}
                >
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
                              value={name}
                              onChange={(event) => setName(event.target.value)}
                            //   placeholder="i.e. John Smith"
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
                              value={email}
                              onChange={(event) => setEmail(event.target.value)}
                            //   placeholder="i.e. jsmith@gmail.com"
                            />
                          </div>
                        </div>
                      </div>
                      {/* Input End */}
                      {/* Input start */}
                      <div className="col-md-6">
                        <div className="quform-element form-group">
                          <label for="sunject" className="text-white">
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
                              value={subject}
                              onChange={(event) => setSubject(event.target.value)}
                            //   placeholder="Clean my ride please!"
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
                              value={phone}
                              onChange={(event) => setPhone(event.target.value)}
                            //   placeholder="323-495-0763"
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
                              value={message}
                              onChange={(event) => setMessage(event.target.value)}
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
};

export default ContactForm;
