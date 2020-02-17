import React from "react";
import { MainLayout } from "../../components/Navigation/MainLayout";
import CompLayout from "../../components/CompLayout/CompLayout";
import { Text } from "../../lib";

const TextPage = () => {
  const text = [
    {
      name: "h1",
      var: <Text textType="h1">Hello</Text>,
      code: '<Text textType="h1">Hello</Text>',
    },
    {
      name: "h2",
      var: <Text textType="h2">Hello</Text>,
      code: '<Text textType="h2">Hello</Text>',
    },
    {
      name: "h3",
      var: <Text textType="h3">Hello</Text>,
      code: '<Text textType="h3">Hello</Text>',
    },
    {
      name: "h4",
      var: <Text textType="h4">Hello</Text>,
      code: '<Text textType="h4">Hello</Text>',
    },
    {
      name: "h5",
      var: <Text textType="h5">Hello</Text>,
      code: '<Text textType="h5">Hello</Text>',
    },
    {
      name: "h6",
      var: <Text textType="h6">Hello</Text>,
      code: '<Text textType="h6">Hello</Text>',
    },
    {
      name: "Default",
      var: <Text>Hello</Text>,
      code: "<Text>Hello</Text>",
    },
  ];

  const propsData = [
    {
      Name: "textType",
      Params: "h1, h2, h3, h4, h5, h6",
      Description:
        "the props 'textType' will determined the type of text that will be shown",
    },
  ];

  return (
    <MainLayout>
      <CompLayout
        compName="Text"
        compDesc="The text component is for displaying text. It standardizes the presentation of text. By default, the Text component renders text in a p tag"
        compVariation={text}
        compProps={propsData}
      ></CompLayout>
    </MainLayout>
  );
};

export default TextPage;
