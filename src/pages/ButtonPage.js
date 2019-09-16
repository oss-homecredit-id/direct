import React from "react";
import { Button } from "../lib/Button/Button";
import CompLayout from "../components/CompLayout/CompLayout";
import Layout from "../components/layout";

const ButtonPage = () => {
  const button = [
    { id: "Filled", var: <Button filled>This is Button</Button> },
    { id: "Rounded", var: <Button rounded>This is Button</Button> },
  ];

  return (
    <Layout>
      <CompLayout
        compName="Button"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={button}
        compItem={button}
      ></CompLayout>
    </Layout>
  );
};

export default ButtonPage;
