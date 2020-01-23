import React from "react";
import CompLayout from "../../components/CompLayout/CompLayout";
import { Input } from "../../lib/Input/Input";
import {MainLayout} from "../../components/MainLayout";

const InputPage = () => {
  const input = [
    {
      name: "Default",
      var: <Input label="label">Placeholder Text</Input>,
    },
    {
      name: "is error",
      var: (
        <Input isError type="date" label="error input">
          This is Input date
        </Input>
      ),
    },
    {
      name: "with helper",
      var: (
        <Input type="text" helper="ini helper" label="input with helper">
          This is Input
        </Input>
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
      <div
        style={{
          width: "200px",
          marginLeft: "500px",
          padding: "100px",
          backgroundColor: "white",
        }}
      >
        <Input label="label">Placeholder Text</Input>
        <Input type="text" helper="ini helper" label="input with helper">
          Placeholder Text
        </Input>
        <Input type="password" label="label">
          PLaceholder Text
        </Input>
      </div>
    </Layout>
  );
};

export default InputPage;
