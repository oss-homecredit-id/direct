import React from "react";

const Input = props => {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      padding: props.icon ? "5px" : "8px",
      background: "white",
      borderRadius: props.icon ? "8px" : "3px",
      border: props.icon ? "unset" : "solid 1px #bfbfbf",
      margin: "30px 5px",
    },
    label: {
      display: props.icon ? "none" : "unset",
      position: "relative",
      padding: "0 3px",
      background: "white",
      top: "-22px",
      color: "#bfbfbf",
      fontSize: "13px",
      fontFamily: "century gothic",
    },
    input: {
      position: props.icon ? "unset" : "absolute",
      border: props.icon ? "none" : "1px",
      marginLeft: props.icon ? "8px" : "unset",
      padding: "3px",
      fontFamily: "century gothic",
      outline: "none",
    },
    icon: {
      width: "30px",
      height: "auto",
      marginLeft: "8px",
      marginBottom: "0",
      paddingRight: "8px",
      borderRight: "1px solid grey",
    },
  };

  let icon = null;

  if (props.icon) {
    icon = <img style={styles.icon} src={props.src}></img>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.label}>{props.children} </div>
      {icon}
      <input
        style={styles.input}
        placeholder={props.icon ? props.children : null}
      ></input>
    </div>
  );
};

export { Input };
