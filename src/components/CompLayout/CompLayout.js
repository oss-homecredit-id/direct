import React, { useState } from "react";
import "./CompLayout.css";

const CompLayout = ({
  variationBtn,
  compName,
  compDesc,
  compItem,
  compVariation,
}) => {
  const [item, setItem] = useState();

  return (
    <div className="comp-container">
      <div className="comp-title">{compName} </div>
      <div className="comp-desc">{compDesc} </div>
      <div className="comp-display">
        <div className="comp-example">{item}</div>
        <div className="comp-variation">
          Types
          <div>
            {compVariation.map(variationBtn => (
              <button
                className="comp-variation-btn"
                key={variationBtn}
                onClick={() => {
                  console.log(variationBtn);
                  setItem(variationBtn.var);
                  console.log(item);
                }}
              >
                {variationBtn.id}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="comp-code">this is code</div>
    </div>
  );
};

export default CompLayout;
