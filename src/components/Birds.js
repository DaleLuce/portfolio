import React from "react";
import "./styles/birds.css";

export function Birds() {
  return (
    <div className="container">
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

      {/* <div className="cloud-box-mid">
        <div className="cloud-six"></div>
      </div> */}
      <div className="cloud-box-mid">
        <div className="cloud-seven"></div>
      </div>
      <div className="cloud-box-low">
        <div className="cloud-eight"></div>
      </div>
      <div className="bird-container bird-container--two">
        <div className="bird bird--five"></div>
      </div>
      <div className="bird-box bird-box--one">
        <div className="bird bird--six"></div>
      </div>
      <div className="bird-box bird-box--two">
        <div className="bird bird--seven"></div>
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

      <div className="bird-box bird-box--six">
        <div className="bird bird--six"></div>
      </div>
    </div>
  );
}
