import React from "react";
import { MainLayout } from "../../components/Navigation/MainLayout";
import TemplateLayout from "../../components/TemplateLayout/TemplateLayout";
import { Input } from "../../lib/Input/Input";
import { Text } from "../../lib/Text/Text";
import LoginImg from "../../assets/image-icon.png";

const loginPage = () => {
  const styles = {
    pageContainer: {
      display: "flex",
      justifyContent: "center",
    },
    formContainer: {
      backgroundColor: "#ffffff",
      padding: "15px",
    },
    image: {
      width: "50%",
      height: "auto",
    },
  };

  const loginPage = {
    name: "Login Page",
    desc:
      "Below is an example on how to use the components in the component library to make a login page. For validation in input you can use onChange props.",
    code: `
    <div className="login-page">
      <div className="login-form">
        <Text textType="h2">Login</Text>
        <Input label="Email"></Input>
        <Input label="Password" type="password"></Input>
      </div>
      <img src={loginImage}></img>
    </div>
    `,
  };

  return (
    <MainLayout>
      <TemplateLayout
        tempName={loginPage.name}
        tempDesc={loginPage.desc}
        tempCode={loginPage.code}
      >
        <div style={styles.pageContainer}>
          <div style={styles.formContainer}>
            <Text textType="h2">Login</Text>
            <Input label="Email"></Input>
            <Input label="Password" type="password"></Input>
          </div>
          <img src={LoginImg} style={styles.image}></img>
        </div>
      </TemplateLayout>
    </MainLayout>
  );
};

export default loginPage;
