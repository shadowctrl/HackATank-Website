import React from "react";
import "./convener.css";
const convener = () => {
  return (
    <React.Fragment>
      <div className="parent-convener">
        <div className="convener-title">
          <img src="/images/logo3.webp" alt="" className="convener-logo" />
          <h1 className="convener-title-name">Conveners</h1>
        </div>

        <div className="convener-container">
          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/senthilkumar.png"
              alt="Senthil Kumar - HOD Cyber Security"
            />
            <h1 className="convener-name"> Dr. M Senthil Kumar</h1>

            <h1 className="convener-position">Head Of Department </h1>
            <h1 className="convener-dep">Cyber Security</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default convener;