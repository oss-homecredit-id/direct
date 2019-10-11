import React from "react";
import CompLayout from "../../components/CompLayout/CompLayout";
import Layout from "../../components/layout";
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
  return (
    <Layout>
      <CompLayout
        compName="List"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={list}
        compData={["test", "baaa", "hmmm"]}
      ></CompLayout>
    </Layout>
  );
};

export default ListPage;
