import React from "react";
import { Text } from "../../lib/Text/Text";

const CodeContainer = ({ label, ...props }) => {
  const styles = {
    container: {
      margin: "25px 0",
    },
    codeBox: {
      backgroundColor: "white",
      border: "1px solid #9c9c9c",
      padding: "10px",
    },
  };
  return (
    <div style={styles.container}>
      <Text textType="h3">{label} </Text>
      <div style={styles.codeBox}> {props.children}</div>
    </div>
  );
};

export default CodeContainer;
