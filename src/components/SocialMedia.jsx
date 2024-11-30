import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div
      onClick={() =>
        window.open(
          "https://www.linkedin.com/in/rohan-mistry-493987202/",
          "_blank"
        )
      }
      className="background"
    >
      <BsLinkedin />
    </div>
    <div
      className="background"
      onClick={() => window.open("https://github.com/rohanmisry231", "_blank")}
    >
      <BsGithub />
    </div>
    <div
      className="background"
      onClick={() =>
        window.open("https://www.instagram.com/fotografiya.zip/", "_blank")
      }
    >
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
