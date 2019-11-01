import React from "react";
import "./TemplateLayout.css";

const TemplateLayout = ({ tempName, children, tempCode }) => {
  return (
    <div className="temp-container">
      <div className="temp-title">{tempName} </div>
      <div className="temp-preview">{children}</div>
      <div className="temp-code">{tempCode} </div>
    </div>
  );
};

export default TemplateLayout;
