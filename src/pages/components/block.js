import React from "react";
import CompLayout from "../../components/CompLayout/CompLayout";
import Layout from "../../components/layout";
import { Block } from "../../lib/Block/Block";
import icon from "../../assets/icon-logo.png";

const BlockPage = () => {
  const card = [
    {
      name: "Default",
      var: (
        <Block name="Title" items="This is the subtitle of the block"></Block>
      ),
    },
    {
      name: "With Icon",
      var: (
        <Block
          imgWidth="60px"
          icon={icon}
          name="Title"
          items="This is the subtitle of the block"
        ></Block>
      ),
    },
  ];
  return (
    <Layout>
      <CompLayout
        compName="Block"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={card}
      ></CompLayout>
    </Layout>
  );
};

export default BlockPage;
