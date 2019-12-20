import React from "react";
import { Button } from "../../lib/Button/Button";
import CompLayout from "../../components/CompLayout/CompLayout";
import Layout from "../../components/layout";

const ButtonPage = () => {
  const button = [
    {
      name: "Primary",
      var: (
        <Button variant="primary" size="lg">
          This is Button
        </Button>
      ),
    },
    {
      name: "Secondary",
      var: <Button variant="secondary">This is Button</Button>,
    },
    {
      name: "Text",
      var: <Button variant="text">This is Button</Button>,
    },
    {
      name: "Disabled",
      var: <Button disabled>This is Button</Button>,
    },
  ];

  const propsData = [
    {
      Name: "Variant",
      Params: "Variant",
      Description: "ini Variant",
    },
  ];

  const buttonCode = `
    <Button variant="filled" type="default" size="lg">
      This is Button 
    </Button>

    <Button variant="nude" type="rounded" size="tiny">
      This is Button
    </Button>

    <Button variant="filled" disabled>
      This is Button
    </Button>`;
  return (
    <Layout>
      <CompLayout
        compName="Button"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={button}
        compProps={propsData}
      ></CompLayout>
    </Layout>
  );
};

export default ButtonPage;
