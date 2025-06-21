import React, { useState } from "react";
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
  const [isImageLoaded, setIsImageLoaded] = useState(false);

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
            <p
              className="p-text text_color_gray"
              style={{ fontSize: "10px !important" }}
            >
              <Typewriter
                cursorStyle={"|"}
                cursor={true}
                words={[
                  "MERN Stack Developer",
                  "Graphics Designer",
                  "AI ML Developer",
                  "Technical Blogger",
                ]}
                loop={false}
              />
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="app__header-img"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.img
          src={images.profile}
          alt="profile_bg"
          className="profile-image"
          initial={{ opacity: 0 }} // Start with opacity 0
          animate={{ opacity: isImageLoaded ? 1 : 0 }} // Fade in when loaded
          transition={{ duration: 0.5 }}
          onLoad={() => setIsImageLoaded(true)} // Set state when image loads
          loading="lazy"
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={props.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
        {!isImageLoaded && <div className="loading-overlay"></div>} {/* Loading indicator */}
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.graphic, images.modeling, images.code].map((circle, index) => (
          <div className="circle-cmp app__flex background" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");