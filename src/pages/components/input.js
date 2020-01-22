import React from "react";
import CompLayout from "../../components/CompLayout/CompLayout";
import { Input } from "../../lib/Input/Input";
import Layout from "../../components/layout";

const InputPage = () => {
  const input = [
    // {
    //   name: "With Icon",
    //   var: (
    //     <Input withIcon src={icon1}>
    //       This is Input
    //     </Input>
    //   ),
    //   param: "apa",
    //   desc: "jadi ini input dengan icon",
    // },
    {
      name: "Default",
      var: <Input label="Default Input"></Input>,
      code: `<Input label="Default Input"></Input>`,
    },
    {
      name: "Password",
      var: <Input type="password" label="Input for password"></Input>,
      code: `<Input type="password" label="Input for password"></Input>`,
    },
    {
      name: "isError",
      var: <Input isError type="text" label="Error Input"></Input>,
      code: `<Input isError type="text" label="Error Input"></Input>`,
    },
    {
      name: "with helper",
      var: (
        <Input
          type="text"
          isHelper="Helper text"
          label="Input with helper"
        ></Input>
      ),
      code: `<Input
          type="text"
          isHelper="Helper text"
          label="Input with helper"
        ></Input>`,
    },
    {
      name: "isDisabled",
      var: <Input isDisabled label="Disabled Input"></Input>,
      code: `<Input isDisabled label="Disabled Input"></Input>`,
    },
  ];

  const propsData = [
    {
      Name: "Label",
      Params: "label",
      Description: "The label displayed on top of the input",
    },
    {
      Name: "Type",
      Params: "type",
      Description:
        "The type of the input that will be displayed (text, password, date, select)",
    },
    {
      Name: "Disabled",
      Params: "disabled",
      Description:
        "When adding props 'disabled', the Input component will be unable to be clicked",
    },
  ];

  return (
    <Layout>
      <CompLayout
        compName="Input"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={input}
        compProps={propsData}
      ></CompLayout>
    </Layout>
  );
};

export default InputPage;
