import React, { useState } from "react";
import Layout from "../../components/layout";
import CompLayout from "../../components/CompLayout/CompLayout";
import { Select } from "../../lib/DropdownSelect/DropdownSelect";

const DropdownSelectPage = () => {
  const [boxSelected, setBoxSelected] = useState();

  const dropdownList = [
    { id: "apa", name: "apayy" },
    { id: "apaa", name: "apayyaaa" },
    { id: "apaaaa", name: "apayyaaaahmmmm" },
  ];

  const dropdown = [
    {
      name: "Default",
      var: (
        <Select
          dropdownList={dropdownList}
          setSelected={setBoxSelected}
        ></Select>
      ),
    },
  ];

  console.log(boxSelected);

  return (
    <Layout>
      <CompLayout
        compName="Dropdown Select"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={dropdown}
      ></CompLayout>
    </Layout>
  );
};

export default DropdownSelectPage;
