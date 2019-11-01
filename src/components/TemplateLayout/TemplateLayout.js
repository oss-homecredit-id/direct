import React from "react";
import "./TemplateLayout.css";

const TemplateLayout = props => {
  return <div className="temp-container">{props.children}</div>;
};

export default TemplateLayout;
