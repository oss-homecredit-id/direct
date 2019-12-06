import React, { useState } from "react";
import "./CompLayout.css";
import Table from "../../lib/Table/Table";

const CompLayout = ({
  compName,
  compDesc,
  compVariation,
  compData,
  compCode,
}) => {
  const [item, setItem] = useState(compVariation[0].var);

  return (
    <div className="comp-container">
      <div className="comp-title">{compName} </div>
      <div className="comp-desc">{compDesc} </div>
      <div className="comp-display">
        <p className="comp-text">Preview</p>
        <div className="preview">
          <div className="comp-example">{item}</div>
          <div className="comp-variation">
            <p className="comp-text">Types</p>
            <div>
              {compVariation.map((variationBtn, key) => (
                <button
                  key={key}
                  className={
                    item === variationBtn.var
                      ? "comp-variation-btn-active"
                      : "comp-variation-btn"
                  }
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
      </div>

      <div className="comp-code">
        <pre>{compCode}</pre>
      </div>
      {compData}
      <Table
        tableHead={["Name", "Params", "Description"]}
        tableData={["Name", "Params", "Description"]}
      ></Table>
    </div>
  );
};

export default CompLayout;
