import React, { useState } from "react";
import Layout from "../../components/layout";
import CompLayout from "../../components/CompLayout/CompLayout";
import { Select } from "../../lib/Select/Select";

const SelectPage = () => {
  const [selected, setSelected] = useState();
  const selectItems = [
    { label: "item 1", value: "item 1" },
    { label: "item 2", value: "item 2" },
    { label: "item 3", value: "item 3" },
    { label: "item 4", value: "item 4" },
    { label: "item 5", value: "item 5" },
  ];
  const select = [
    {
      name: "Default",
      var: (
        <Select
          options={selectItems}
          selected={selected}
          setSelected={setSelected}
        ></Select>
      ),
      code: `
      <Select
          options={selectItems}
          selected={selected}
          setSelected={setSelected}
        ></Select>
      `,
    },
  ];

  const propsData = [
    {
      Name: "option",
      Params: "",
      Description:
        "the props 'option' will receive several options in a form of an array",
    },
  ];

  return (
    <Layout>
      <CompLayout
        compName="Select"
        compDesc="Select lets users choose one option from a list of 4 or more options without overloading the interface. Use select when users must select one option from a longer, but very predictable list of options."
        compVariation={select}
        compProps={propsData}
      ></CompLayout>
    </Layout>
  );
};

export default SelectPage;
