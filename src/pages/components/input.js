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
    },
    {
      name: "is error",
      var: <Input isError type="text" label="Error Input"></Input>,
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
    },
    {
      name: "isDisabled",
      var: <Input isDisabled label="Disabled Input"></Input>,
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
    </Layout>
  );
};

export default InputPage;
