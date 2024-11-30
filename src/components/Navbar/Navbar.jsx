import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import Switch from "react-switch";
import { images } from "../../constants";
import "./Navbar.scss";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar background_nav">
      <div
        className="app__navbar-logo"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
            /* you can also use 'auto' behaviour
         in place of 'smooth' */
          })
        }
      >
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "certificates", "contact"].map(
          (item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Switch
          onChange={props.onChange}
          checked={props.mode === "dark" ? true : false}
          onColor="#0055d5"
          offColor="#373737"
          uncheckedIcon={
            <div
              style={{
                color: "#ffff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 15,
                paddingRight: 2,
              }}
            >
              <BsFillSunFill />
            </div>
          }
          checkedIcon={
            <div
              style={{
                color: "#ffff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 15,
                paddingRight: 2,
              }}
            >
              <BsFillMoonStarsFill />
            </div>
          }
        />
        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="background"
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {[
                  "home",
                  "about",
                  "work",
                  "skills",
                  "certificates",
                  "contact",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      onClick={() => setToggle(false)}
                      className="text_color"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
