import React, { useState } from "react";
import "./CompLayout.css";
import Table from "../../lib/Table/Table";

const CompLayout = ({ compName, compDesc, compVariation, compData }) => {
  const [item, setItem] = useState(compVariation[0].var);

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
                className={
                  item === variationBtn.var
                    ? "comp-variation-btn-active"
                    : "comp-variation-btn"
                }
                key={variationBtn}
                onClick={() => {
                  console.log(variationBtn);
                  setItem(variationBtn.var);
                  console.log(item);
                }}
              >
                {variationBtn.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="comp-code">this is code</div>
      <Table
        tableHead={["Name", "Params", "Description"]}
        tableData={["name", "params", "desc"]}
      ></Table>
    </div>
  );
};

export default CompLayout;
