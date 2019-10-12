import React from "react";
import CompLayout from "../../components/CompLayout/CompLayout";
import icon from "../../assets/icon-close.png";
import icon1 from "../../assets/icon-logo.png";
import { Input } from "../../lib/Input/Input";
import Layout from "../../components/layout";

const InputPage = () => {
  const input = [
    {
      name: "With Icon",
      var: (
        <Input withIcon src={icon1}>
          This is Input
        </Input>
      ),
      param: "apa",
      desc: "jadi ini input dengan icon",
    },
    { name: "Without Icon", var: <Input>This is Input</Input> },
    { name: "is Disabled", var: <Input isDisabled>This is Input</Input> },
    {
      name: "is Error",
      var: <Input isError>This is Input</Input>,
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
