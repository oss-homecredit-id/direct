import React, { useState } from "react";
import Layout from "../../components/layout";
import CompLayout from "../../components/CompLayout/CompLayout";
import { Radio } from "../../lib";

const RadiobtnPage = () => {
  const [radioSelected, setRadioSelected] = useState();
  const [selected, setSelected] = useState();
  const [select, setSelect] = useState();

  const radio = [
    {
      name: "Default",
      var: (
        <Radio
          option={["a", "b", "c"]}
          name="row"
          selected={radioSelected}
          setSelected={setRadioSelected}
        ></Radio>
      ),
    },
    {
      name: "List",
      var: (
        <Radio
          option={["test", "tessssr", "baaa"]}
          name="display"
          selected={selected}
          setSelected={setSelected}
          radioType="list"
        ></Radio>
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
        compName="Radio Button"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={radio}
        compProps={propsData}
      ></CompLayout>
      <Radio
        option={["please", "works", "pleaaase"]}
        name="display"
        selected={select}
        setSelected={setSelect}
        radioType="list"
      ></Radio>
    </Layout>
  );
};

export default RadiobtnPage;
