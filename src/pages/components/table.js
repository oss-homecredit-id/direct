import React from "react";
import CompLayout from "../../components/CompLayout/CompLayout";
import Layout from "../../components/layout";
import Table from "../../lib/Table/Table";

const ModalPage = () => {
  const example = [
    {
      Header1: "Content 1",
      Header2: "This is content 2",
      Header3: "Now this is content 3",
      Header4: "Last, content 4",
    },
    {
      Header1: "AAAAA",
      Header2: "This is is is",
      Header3: "Now ",
      Header4: "whatttt",
    },
  ];

  const table = [
    {
      name: "Default",
      var: <Table tableData={example}></Table>,
    },
    {
      name: "Type 1",
      var: <Table type1 tableData={example}></Table>,
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
        compName="Table"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={table}
        compProps={propsData}
      ></CompLayout>
    </Layout>
  );
};

export default ModalPage;
