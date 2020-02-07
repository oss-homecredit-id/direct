import React from "react";
import CompLayout from "../../components/CompLayout/CompLayout";
import { Input } from "../../lib/Input/Input";
import Layout from "../../components/layout";

const InputPage = () => {
  const input = [
    {
      name: "Default",
      var: <Input label="label">Placeholder Text</Input>,
      code: `<Input label="label"> Placeholder Text </Input>`,
    },
    {
      name: "is error",
      var: (
        <Input isError label="error input">
          This is Input date
        </Input>
      ),
      code: `
      <Input isError type="date" label="error input">
        This is Input date
      </Input>`,
    },
    {
      name: "with helper",
      var: (
        <Input type="text" helper="ini helper" label="input with helper">
          This is Input
        </Input>
      ),
      code: `
      <Input
          type="text"
          isHelper="Helper text"
          label="Input with helper"
        ></Input>
      `,
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
      Params: "text, password",
      Description: "The type of the input that will be displayed",
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
        compDesc="Inputs are used to allow users to provide text input. You can use a Label to identify and describe the purpose of an input element."
        compVariation={input}
        compProps={propsData}
      ></CompLayout>
    </Layout>
  );
};

export default InputPage;
