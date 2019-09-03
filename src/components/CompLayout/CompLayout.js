import React from "react";
import "./CompLayout.css";

const CompLayout = props => {
  return (
    <div className="comp-container">
      <div className="comp-title">{props.compName} </div>
      <div className="comp-desc">{props.compDesc} </div>
      <div>
        <div className="comp-display">{props.children} </div>
        <div></div>
      </div>
    </div>
  );
};

export default CompLayout;
