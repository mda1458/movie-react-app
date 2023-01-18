import React from "react";
import "./spinner.css";

export default function Spinner() {
  return (
    // a full page Spinner with a loading spinner in the middle
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="overlay">
            <div className="overlay__inner">
                <div className="overlay__content"><span className="spinner"></span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}