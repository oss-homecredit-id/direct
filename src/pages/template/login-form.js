import React from "react";
import Layout from "../../components/layout";
import { LoginTemplate } from "../../lib/LoginTemplate/LoginTemplate";
import TemplateLayout from "../../components/TemplateLayout/TemplateLayout";
import Gumball from "../../assets/gumball.png";

const loginForm = () => {
  const Input = ["Email", "Password"];

  return (
    <Layout>
      <TemplateLayout tempName="Login Page">
        <LoginTemplate
          loginHeader="Login"
          loginImage={Gumball}
          loginInput={Input}
        ></LoginTemplate>
      </TemplateLayout>
    </Layout>
  );
};

export default loginForm;
