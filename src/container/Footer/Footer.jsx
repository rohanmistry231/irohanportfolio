import React, { useState , useRef } from "react";
import emailjs from "@emailjs/browser";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_4mbtpvy', 'template_ngkqteh', form.current, '4TR23d31pMri4V8p3')
      .then((result) => {
          console.log(result.text);
          setLoading(false);
          setIsFormSubmitted(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <h2 className="head-text text_color">
        Contact <span>Me</span>
      </h2>
      <div className="app__footer-cards">
        <div
          className="app__footer-card background-with-shadow"
          onClick={() =>
            window.open("mailto:rohanmistry231@gmail.com", "_blank")
          }
        >
          <img src={images.email} alt="email" />
          <p className="p-text text_color_gray">rohanmistry231@gmail.com</p>
        </div>
        <div
          className="app__footer-card background-with-shadow"
          onClick={() => window.open("tel:+918980067632", "_blank")}
        >
          <img src={images.mobile} alt="phone" />
          <p className="p-text text_color_gray">+91 8980067632</p>
        </div>
        <div
          className="app__footer-card background-with-shadow"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/19d7722pmyOqa42xXYp8vmJynyNvIGLme/view?usp=sharing",
              "_blank"
            )
          }
        >
          <img src={images.cv} alt="cv" />
          <p className="p-text text_color_gray">My Resume</p>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form ref={form} onSubmit={sendEmail} className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text background-with-shadow text_color border"
              type="text"
              placeholder="Your Name"
              name="user_name"
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text background-with-shadow text_color border"
              type="email"
              placeholder="Your Email"
              name="user_email"
            />
          </div>
          <div>
            <textarea
              className="p-text background-with-shadow text_color border"
              placeholder="Your Message"
              name="message"
            />
          </div>
          <button type="button" className="p-text" onClick={sendEmail}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text text_color">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
