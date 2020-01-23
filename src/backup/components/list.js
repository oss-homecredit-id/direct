import React from "react";
import CompLayout from "../../components/CompLayout/CompLayout";
import {MainLayout} from "../../components/MainLayout";
import { List } from "../../lib/List/List";

const DataList = [
  { title: "Title 1", subtitle: "Subtitle 1" },
  { title: "Title 2", subtitle: "Subtitle 2" },
  { title: "Title 3", subtitle: "Subtitle 3" },
];

const ListPage = () => {
  const list = [
    {
      name: "Numbered",
      var: <List data={DataList}></List>,
    },
    {
      name: "Without Number",
      var: <List withoutNumber data={DataList}></List>,
    },
  ];

  const propsData = [
    {
      Name: "withoutNumber",
      Params: "",
      Description:
        "when the developer adds the props 'withoutNumber' to the component, the List component will be shown without number",
    },
    {
      Name: "data",
      Params: "",
      Description:
        "the props 'data' will receive several data as an array of string",
    },
  ];

  return (
    <Layout>
      <CompLayout
        compName="List"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={list}
        compProps={propsData}
      ></CompLayout>
    </Layout>
  );
};

export default ListPage;
