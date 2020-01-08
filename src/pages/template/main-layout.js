import React from "react";
import Layout from "../../components/layout";
import TemplateLayout from "../../components/TemplateLayout/TemplateLayout";
import { LayoutTemplate } from "../../lib/LayoutTemplate/LayoutTemplate";

const mainLayout = () => {
  const test = () => {
    alert("HA");
  };

  const what = () => {
    alert("hhhhhhhhhhhh kzl");
  };

  const navList = ["menu 1", "menu 2", "menu 3", "menu 4"];

  const content = (
    <div>
      ini content
      <div>serius deh</div>
    </div>
  );

  return (
    <Layout>
      <TemplateLayout tempName="Main Layout">
        <LayoutTemplate
          headerText="Welcome"
          headerButton="Log Out"
          headerClick={() => test()}
          navList={navList}
          navClick={() => what()}
          content={content}
        ></LayoutTemplate>
      </TemplateLayout>
    </Layout>
  );
};

export default mainLayout;
