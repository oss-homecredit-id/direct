import React, { useState } from "react";
import "./CompLayout.css";
import Table from "../../lib/Table/Table";
import { Button } from "../../lib/Button/Button";
import { Text } from "../../lib/Text/Text";

const CompLayout = ({
  compName,
  compDesc,
  compVariation,
  compData,
  compProps,
}) => {
  const [item, setItem] = useState(compVariation[0].var);
  const [code, setCode] = useState(compVariation[0].code);
  const [showCode, setShowCode] = useState(false);
  // console.log(showCode);

  const styles = {
    title: {
      fontSize: "34px",
      fontWeight: "500",
      marginBottom: "15px",
    },
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
    table: {
      width: "75%",
    },
  };

  return (
    <div className="comp-container">
      <Text styleConfig={styles.title}>{compName}</Text>
      <Text textType="h3">{compDesc}</Text>
      <div className="comp-display">
        <p className="comp-text">Preview</p>
        <div className="preview">
          <div className="comp-variation">
            <div style={{ display: "flex" }}>
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

            <Button
              variant="text"
              onClick={() => {
                setShowCode(!showCode);
              }}
            >
              code
            </Button>
          </div>
          <div className="comp-example">{item}</div>
          <div className={showCode ? "comp-code-show" : "comp-code-hide"}>
            <pre>{code} </pre>
          </div>
        </div>
      </div>
      {compData}
      <Table tableData={compProps} styleConfig={styles.table}></Table>
    </div>
  );
};

export default CompLayout;
