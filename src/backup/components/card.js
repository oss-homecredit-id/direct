import React from "react";
import CompLayout from "../../components/CompLayout/CompLayout";
import { Card } from "../../lib";
import {MainLayout} from "../../components/MainLayout";
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
      Name: "With Image",
      Params: "",
      Description:
        "this props will receive a string that will be put on the button of the card",
    },
    {
      Name: "button",
      Params: "",
      Description:
        "this props will receive a string that will be put on the button of the card",
    },
    {
      Name: "title",
      Params: "",
      Description:
        "this props will receive a string that will be put on the header of the card",
    },
    {
      Name: "subtitle",
      Params: "",
      Description:
        "this props will receive a string that will be put on the lower header of the card",
    },
    {
      Name: "img",
      Params: "",
      Description:
        "this props will receive an image that will be put in the middle of the card",
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
