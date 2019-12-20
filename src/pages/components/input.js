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
      name: "Without Icon",
      var: <Input isHelper="yaw" label="label"></Input>,
    },
    {
      name: "is Disabled",
      var: (
        <Input isError type="text" label="error input">
          This is Input
        </Input>
      ),
    },
    {
      name: "with helper",
      var: (
        <Input type="text" isHelper="dis" label="input with helper">
          This is Input
        </Input>
      ),
    },
  ];

  return (
    <Layout>
      <CompLayout
        compName="Input"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={input}
      ></CompLayout>
    </Layout>
  );
};

export default InputPage;
