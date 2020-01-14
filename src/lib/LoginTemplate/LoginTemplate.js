import React from "react";
import { Input } from "../../lib/Input/Input";
import { Button } from "../../lib/Button/Button";
import Image from "../../assets/image-icon.png";
import { Text } from "../Text/Text";

const LoginTemplate = props => {
  const styles = {
    container: {
      display: "flex",
      width: "100%",
      height: "100%",
    },
    form: {
      backgroundColor: "white",
      padding: "20px",
      width: "20%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxShadow: "0 8px 13px 0 rgba(0, 0, 0, 0.12)",
    },
    image: {
      height: "auto",
      width: "60%",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <Text textType="h2">{props.loginHeader}</Text>
        {props.loginInput.map((input, index) => (
          <Input key={index} label={input}></Input>
        ))}
        <Button filled>Masuk</Button>
      </div>
      <img
        style={styles.image}
        src={props.loginImage ? props.loginImage : Image}
      ></img>
    </div>
  );
};

export { LoginTemplate };
