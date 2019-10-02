import React from "react";
import CompLayout from "../../components/CompLayout/CompLayout";
import icon from "../../assets/icon-close.png";
import { Input } from "../../lib/Input/Input";
import Layout from "../../components/layout";

const InputPage = () => {
  const input = [
    {
      name: "With Icon",
      var: (
        <Input withIcon src={icon}>
          This is Input
        </Input>
      ),
      param: "apa",
      desc: "jadi ini input dengan icon",
    },
    { name: "Without Icon", var: <Input>This is Input</Input> },
  ];

  return (
    <Layout>
      <CompLayout
        compName="Input"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={input}
        compData={[input.name, input.param, input.desc]}
      ></CompLayout>
      <Input type="text">Test</Input>
    </Layout>
  );
};

export default InputPage;
