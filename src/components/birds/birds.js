import React, { useState } from "react";
import "./birds.css";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme, GlobalStyles } from "../../themes.js";

export function Birds() {
  const [theme, setTheme] = useState("light");
  const [night, setNight] = useState(false);
  const [animate, setAnimate] = useState(false);
  const handleClick = () => {
    if (!animate) {
      setAnimate(!animate);
      setTimeout(() => {
        setNight(!night);
        console.log("day");
      }, "1000");
    } else {
      setAnimate(!animate);
      setNight(!night);
      console.log("night");
    }
  };

  return (
    <div className="container" onClick={handleClick}>
      <div className="starbox">
        <div className="star1"></div>
      </div>
      <div className="cloud-box-high">
        <div className="cloud-one"></div>
      </div>
      <div className="cloud-box-low">
        <div className="cloud-two"></div>
      </div>
      <div className="cloud-box-mid">
        <div className="cloud-three"></div>
      </div>
      <div className="cloud-box-mid">
        <div className="cloud-five"></div>
      </div>
      <div className="cloud-box-high">
        <div className="cloud-four"></div>
      </div>
      <div className="cloud-box-mid">
        <div className="cloud-seven"></div>
      </div>
      <div className="cloud-box-low">
        <div className="cloud-eight"></div>
      </div>
      <div className="bird-container bird-container--two">
        <div className="bird bird--five"></div>
      </div>
      <div className="bird-box">
        <div className="bird bird--six"></div>
      </div>
      <div className="bird-box-high bird-box-high--one">
        <div className="bird bird--one"></div>
      </div>
      <div className="bird-box-high bird-box-high--two">
        <div className="bird bird--two"></div>
      </div>
      <div className="bird-container bird-container--one">
        <div className="bird bird--three"></div>
      </div>
      <div className="cloud-box-low">
        <div className="cloud-nine"></div>
      </div>
      //test
      <div className="bird-box bird-box--one">
        <div className="bird bird--one"></div>
      </div>
      {!night && (
        <div
          className={animate ? "sunContainer sunset" : "sunContainer sunrise"}
        >
          <div className="sun"></div>
        </div>
      )}
    </div>
  );
}
