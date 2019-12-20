import React from "react";
import CompLayout from "../../components/CompLayout/CompLayout";
import { Card } from "../../lib";
import Layout from "../../components/layout";
import image from "../../assets/image-icon.png";

const CardPage = () => {
  const card = [
    {
      name: "Without Image",
      var: (
        <Card button="Button" title="Title" subtitle="Subtitle">
          This is Button
        </Card>
      ),
    },
    {
      name: "With Image",
      var: (
        <Card button="Button" title="Title" subtitle="Subtitle" img={image}>
          This is Button
        </Card>
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
        compName="Card"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={card}
        compProps={propsData}
      ></CompLayout>
    </Layout>
  );
};

export default CardPage;
