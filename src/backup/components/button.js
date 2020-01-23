import React from "react";
import { Button } from "../../lib/Button/Button";
import CompLayout from "../../components/CompLayout/CompLayout";
import {MainLayout} from "../../components/MainLayout";

const ButtonPage = () => {
  const button = [
    {
      name: "Primary",
      var: (
        <Button variant="primary" size="lg">
          This is Button
        </Button>
      ),
      code: "<Button variant='primary' >This is Button</Button>",
    },
    {
      name: "Secondary",
      var: <Button variant="secondary">This is Button</Button>,
      code: "<Button variant='secondary'>This is Button</Button>",
    },
    {
      name: "Text",
      var: <Button variant="text">This is Button</Button>,
      code: "<Button variant='text' >This is Button</Button>",
    },
    {
      name: "Disabled",
      var: <Button isDisabled>This is Button</Button>,
      code: "<Button isDisabled >This is Button</Button>",
    },
  ];

  const propsData = [
    {
      Name: "Variant",
      Params: "Primary, Seconday, Text",
      Description:
        "There are 3 variant type of Button that distinguishes the style of the button",
    },
    {
      Name: "Disabled",
      Params: "",
      Description:
        "When adding props 'Disabled', the Button component will be unable to be clicked",
    },
    {
      Name: "styleConfig",
      Params: "",
      Description:
        "When adding props 'styleConfig', some of the button style's aspect can be configured such as margin, padding, and width",
    },
  ];

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
