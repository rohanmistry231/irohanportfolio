import React, { useState, useEffect } from "react";
import { About, Skills, Work, Certificates, Contact } from "./container";
import Header from "./container/Header/Header";
import { Navbar } from "./components";
import "./App.scss";
import { images } from "./constants";

const App = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") == null ? "dark" : localStorage.getItem("mode")
  );
  const [isLoading, setIsLoading] = useState(true);

  const handleChangeMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
    localStorage.setItem("mode", mode === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    // Simulate content loading (e.g., 2 seconds delay)
    // You can replace this with actual loading logic (e.g., image preloading or API calls)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={mode}>
      {isLoading ? (
        <div className="app__loader">
          <div className="loader-container">
            <h1 className="loader-text">irohanportfolio</h1>
          </div>
        </div>
      ) : (
        <div className="app">
          <Navbar onChange={handleChangeMode} mode={mode} />
          <Header circle={mode === "dark" ? images.circle : images.circleWhite} />
          <About />
          <Work />
          <Skills />
          <Certificates />
          <Contact />
        </div>
      )}
    </div>
  );
};

export default App;