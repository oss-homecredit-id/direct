import React from "react";
import { LoginTemplate } from "../../lib/LoginTemplate/LoginTemplate";
import TemplateLayout from "../../components/TemplateLayout/TemplateLayout";
import Gumball from "../../assets/image-icon.png";
import { MainLayout } from "../../components/MainLayout";

const loginForm = () => {
  const Input = ["Email", "Password"];

  return (
    <MainLayout>
      <TemplateLayout tempName="Login Page">
        <LoginTemplate
          loginHeader="Login"
          loginImage={Gumball}
          loginInput={Input}
        ></LoginTemplate>
      </TemplateLayout>
    </MainLayout>
  );
};

export default loginForm;
