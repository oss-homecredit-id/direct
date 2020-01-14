import React from "react";
import Icon from "../../assets/icon-logo.png";
import { Text } from "../Text/Text";
import { Button } from "../Button/Button";

const MainHeader = props => {
  const styles = {
    container: {
      width: "100%",
      display: "flex",
      backgroundColor: "#ffffff",
      boxShadow: "rgba(38, 38, 38, 0.1) 0px 1px 10px",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "5px",
    },
    logo: {
      width: "auto",
      height: "85px",
      margin: "0 10px",
    },
    textContainer: {
      display: "flex",
      margin: "15px 30px",
      alignItems: "center",
    },
    button: {
      marginLeft: "30px",
    },
  };
  return (
    <div style={styles.container}>
      <img
        style={styles.logo}
        src={props.headerLogo ? props.headerLogo : Icon}
      ></img>
      <div style={styles.textContainer}>
        <Text textType="h4">{props.headerText} </Text>
        <Button onClick={props.buttonClick} styleConfig={styles.button}>
          {props.headerButton}
        </Button>
      </div>
    </div>
  );
};

export { MainHeader };
