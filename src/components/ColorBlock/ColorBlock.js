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
      backgroundColor: props.color,
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.block}></div>
      <p style={{ fontSize: "14px" }}>{props.color}</p>
    </div>
  );
};

export default ColorBlock;
