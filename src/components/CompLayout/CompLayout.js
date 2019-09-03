import React from "react";
import "./CompLayout.css";

const CompLayout = props => {
  return (
    <div className="comp-container">
      <div className="comp-title">{props.compName} </div>
      <div className="comp-desc">{props.compDesc} </div>
      <div className="comp-display">
        <div className="comp-example">{props.children} </div>
        <div className="comp-variation">
          Types
          <div>
            {props.compVariation.map((variationBtn, index) => (
              <button className="comp-variation-btn" key={index}>
                {variationBtn}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompLayout;
