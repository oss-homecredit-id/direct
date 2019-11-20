import React from "react";
import PropTypes from "prop-types";

const Radio = props => {
  const checked1 = props.selected === props.option1;
  const checked2 = props.selected === props.option2;
  const checked3 = props.selected === props.option3;

  const styles = {
    radioContainer: {
      display: "flex",
      margin: "10px",
    },
    option: {
      border: "1px solid #B3B3B3",
      padding: "10px",
      display: "flex",
      alignItems: "center",
      backgroundColor: "unset",
      color: "#9f9f9f",
      fontWeight: "unset",
      cursor: "pointer",
    },
    optionChecked: {
      border: "1px solid #E11931",
      padding: "10px",
      display: "flex",
      alignItems: "center",
      backgroundColor: "rgba(225,25,49,0.1)",
      color: "black",
      fontWeight: "bold",
      cursor: "pointer",
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
  };

  const radioChange = event => {
    props.setSelected(event.currentTarget.value);
  };

  const radio3 = (
    <div style={checked3 ? { ...styles.optionChecked } : { ...styles.option }}>
      <div style={checked3 ? styles.check : styles.uncheck}></div>
      <input
        style={styles.input}
        type="radio"
        value={props.option3}
        checked={checked3}
        onChange={event => radioChange(event)}
        name={props.name}
      ></input>
      <label className="m-left-5 m-right-5">{props.option3}</label>
    </div>
  );

  return (
    <div style={styles.radioContainer}>
      <div
        style={
          checked1
            ? { ...styles.optionChecked, borderRadius: "5px 0 0 5px" }
            : { ...styles.option, borderRadius: "5px 0 0 5px" }
        }
      >
        <div style={checked1 ? styles.check : styles.uncheck}></div>
        <input
          style={styles.input}
          type="radio"
          value={props.option1}
          checked={checked1}
          onChange={event => radioChange(event)}
          name={props.name}
        ></input>
        <label className="m-left-5 m-right-5">{props.option1}</label>
      </div>

      {props.tripleRadio && radio3}

      <div
        style={
          checked2
            ? { ...styles.optionChecked, borderRadius: "0 5px 5px 0" }
            : { ...styles.option, borderRadius: "0 5px 5px 0" }
        }
      >
        <div style={checked2 ? styles.check : styles.uncheck}></div>
        <input
          style={styles.input}
          type="radio"
          value={props.option2}
          checked={checked2}
          onChange={event => radioChange(event)}
          name={props.name}
        ></input>
        <label className="m-left-5 m-right-5">{props.option2}</label>
      </div>
    </div>
  );
};

export { Radio };

Radio.propTypes = {
  option3: PropTypes.string.isRequired,
};

Radio.defaultProps = {
  option3: "option 3",
};
