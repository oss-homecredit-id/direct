import React from "react";
import Layout from "../../components/layout";
import CompLayout from "../../components/CompLayout/CompLayout";
import { Select } from "../../lib/Select/Select";

const SelectPage = () => {
  const selectItems = [
    { label: "item 1", value: "item 1" },
    { label: "item 2", value: "item 2" },
  ];
  const select = [
    {
      name: "Default",
      var: <Select option={selectItems}></Select>,
    },
  ];

  return (
    <Layout>
      <CompLayout
        compName="Select"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={select}
      ></CompLayout>
    </Layout>
  );
};

export default SelectPage;
