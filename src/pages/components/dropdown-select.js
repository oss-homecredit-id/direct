import React, { useState } from "react";
import Layout from "../../components/layout";
import CompLayout from "../../components/CompLayout/CompLayout";
import { Select } from "../../lib/Select/Select";

const DropdownSelectPage = () => {
  const [boxSelected, setBoxSelected] = useState();

  const dropdownList = [
    { id: "apa", label: "apayy" },
    { id: "apaa", label: "apayyaaa" },
    { id: "apaaaa", label: "apayyaaaahmmmm" },
  ];

  const dropdown = [
    {
      name: "Default",
      var: <Select option={dropdownList}></Select>,
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
        compName="Dropdown Select"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={dropdown}
        compProps={propsData}
      ></CompLayout>
    </Layout>
  );
};

export default DropdownSelectPage;
