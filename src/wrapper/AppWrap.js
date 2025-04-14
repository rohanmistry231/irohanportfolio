import React from "react";
import { NavigationDots } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC(props) {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <div className="app__wrapper app__flex">
          <Component {...props} />
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
