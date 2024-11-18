import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = (props) => {
  console.log("hello", props);
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex background">
            <span style={{ fontSize: "2.5rem" }} className="wave">
              👋
            </span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text text_color_gray">Hello, I am</p>
              <h1 className="head-text text_color">Rohan</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex background">
            <p className="p-text text_color_gray" style={{ fontSize: "10px !important" }}>
              <Typewriter
                cursorStyle={"|"}
                cursor={true}
                words={[
                  "Creative Graphics Designer",
                  "Frontend Developer",
                  "Data Analyst",
                  "3D Modeler",
                  "Photographer",
                  "Music composer"
                ]}
                loop={false}
              />
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" loading="lazy"/>
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={props.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.graphic, images.modeling, images.code].map((circle, index) => (
          <div
            className="circle-cmp app__flex background"
            key={`circle-${index}`}
          >
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
