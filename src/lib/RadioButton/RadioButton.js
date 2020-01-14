import React, { useEffect, useState } from "react";

const Radio = ({ option, name, radioType, selected, setSelected }) => {
  const list = radioType === "list";
  const [options, setOptions] = useState([]);

  const styles = {
    radioContainer: {
      display: "flex",
      flexDirection: list ? "column" : "row",
      margin: "10px",
    },
    option: {
      margin: list ? "10px" : "0 10px",
      border: "1px solid #B3B3B3",
      padding: "10px",
      display: "flex",
      alignItems: "center",
      backgroundColor: "unset",
      color: "#9f9f9f",
      fontWeight: "unset",
      cursor: "pointer",
      borderRadius: "3px",
    },
    optionChecked: {
      margin: list ? "10px" : "0 10px",
      border: "1px solid #E11931",
      padding: "10px",
      display: "flex",
      alignItems: "center",
      backgroundColor: "rgba(225,25,49,0.1)",
      color: "black",
      fontWeight: "bold",
      cursor: "pointer",
      borderRadius: "3px",
    },
    input: {
      position: "absolute",
      opacity: "0",
      cursor: "pointer",
      width: "8%",
      height: "5%",
    },
    check: {
      borderRadius: "100%",
      border: "4px solid #E11931",
      height: "13px",
      width: "13px",
      margin: "5px",
    },
    uncheck: {
      borderRadius: "100%",
      border: "1px solid black",
      height: "10px",
      width: "10px",
      margin: "5px",
    },
    label: {
      margin: "-2px 5px 0px 5px",
    },
  };

  const radioChange = event => {
    setSelected(event.currentTarget.value);
  };

  const optionsValidate = options.length < 4 && options.length > 1;

  useEffect(() => {
    setOptions(option);
    console.log(selected);
  }, [option]);

  return (
    <div style={styles.radioContainer}>
      {options
        ? optionsValidate
          ? options.map((option, index) => (
              <div
                style={selected ? styles.optionChecked : styles.option}
                key={index}
              >
                <div style={selected ? styles.check : styles.uncheck}></div>
                <input
                  style={styles.input}
                  type="radio"
                  value={option}
                  checked={selected}
                  onChange={event => radioChange(event)}
                  name={name}
                ></input>
                <label style={styles.label}>{option} </label>
              </div>
            ))
          : ""
        : console.log("nada")}
    </div>
  );
};

export { Radio };
