import React, { useState } from "react";
import { About, Footer, Skills, Work, Certificates} from "./container";
import Header from "./container/Header/Header";
import { Navbar } from "./components";
import "./App.scss";
import { images } from "./constants";


const App = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") == null ? "dark" : localStorage.getItem("mode")
  );
  const handleChangeMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
    localStorage.setItem("mode", mode === "dark" ? "light" : "dark");
  };
  return (
    <div className={mode}>
      <div className="app">
        <Navbar onChange={handleChangeMode} mode={mode} />
        <Header circle={mode === "dark" ? images.circle : images.circleWhite} />
        <About />
        <Work />
        <Skills />
        <Certificates/>
        <Footer />
      </div>
    </div>
  );
};

export default App;
