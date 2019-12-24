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

  const propsData = [
    {
      Name: "Default",
      Params: "",
      Description:
        "When adding props 'Default', the Block component that the developer will get is the default block without an icon",
    },
    {
      Name: "With Icon",
      Params: "",
      Description:
        "When adding props 'With Icon', the Block component that the developer will get is the block with an icon",
    },
    {
      Name: "Name",
      Params: "",
      Description:
        "The props 'Name' will receive a string as a title of the block",
    },
    {
      Name: "Icon",
      Params: "",
      Description:
        "The props 'Icon' is used when the developer add 'With Icon' props. This props receive an image",
    },
    {
      Name: "imgWidth",
      Params: "",
      Description:
        "The props 'imgWidth' will receive an image width in the form of string when the developer add 'With Icon' props",
    },
  ];

  return (
    <Layout>
      <CompLayout
        compName="Block"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={card}
        compProps={propsData}
      ></CompLayout>
    </Layout>
  );
};

export default BlockPage;
