import React from "react";

const ColorBlock = props => {
  const styles = {
    container: {
      marginRight: "30px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    block: {
      width: "60px",
      height: "60px",
      borderRadius: "100%",
      borderWidth: props.border ? "1px" : "unset",
      borderStyle: props.border ? "solid" : "unset",
      borderColor: props.border ? props.color : "unset",
      backgroundColor: props.border ? "transparent" : props.color,
    },
  };

  console.log(props.border);
  return (
    <div style={styles.container}>
      <div style={styles.block}></div>
      <p style={{ fontSize: "14px" }}>{props.color}</p>
    </div>
  );
};

export default ColorBlock;
