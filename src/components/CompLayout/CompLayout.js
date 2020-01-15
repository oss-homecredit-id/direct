import React, { useState } from "react";
import "./CompLayout.css";
import Table from "../../lib/Table/Table";
import { Button } from "../../lib/Button/Button";

const CompLayout = ({
  compName,
  compDesc,
  compVariation,
  compData,
  compProps,
}) => {
  const [item, setItem] = useState(compVariation[0].var);
  const [code, setCode] = useState(compVariation[0].code);

  const styles = {
    typesBtn: {
      color: "#9B9B9B",
      padding: "5px 10px",
      marginBottom: "0",
    },
    typesBtnActive: {
      color: "#e11931",
      padding: "5px 10px",
      borderBottom: "2px solid #e11931",
      borderRadius: "0",
      marginBottom: "0",
    },
  };

  return (
    <div className="comp-container">
      <div className="comp-title">{compName} </div>
      <div className="comp-desc">{compDesc} </div>
      <div className="comp-display">
        <p className="comp-text">Preview</p>
        <div className="preview">
          <div className="comp-variation">
            {compVariation.map((variationBtn, key) => (
              <Button
                key={key}
                variant="text"
                onClick={() => {
                  setItem(variationBtn.var);
                  setCode(variationBtn.code);
                }}
                styleConfig={
                  item === variationBtn.var
                    ? styles.typesBtnActive
                    : styles.typesBtn
                }
              >
                {variationBtn.name}
              </Button>
            ))}
          </div>
          <div className="comp-example">{item}</div>
        </div>
      </div>
      <div className="comp-code">
        <pre>{code} </pre>
      </div>
      {compData}
      <Table tableData={compProps}></Table>
    </div>
  );
};

export default CompLayout;
