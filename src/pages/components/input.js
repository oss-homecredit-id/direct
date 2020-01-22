import React from "react";
import CompLayout from "../../components/CompLayout/CompLayout";
import { Input } from "../../lib/Input/Input";
import Layout from "../../components/layout";

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
    },
    {
      name: "isDisabled",
      var: (
        <Input isDisabled label="disabled input">
          This is Input
        </Input>
      ),
    },
  ];

  const propsData = [
    {
      Name: "Variant",
      Params: "Variant",
      Description: "ini Variant",
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
