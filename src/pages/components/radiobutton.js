import React, { useState } from "react";
import Layout from "../../components/layout";
import CompLayout from "../../components/CompLayout/CompLayout";
import { Radio } from "../../lib";

const RadiobtnPage = () => {
  const [radioSelected, setRadioSelected] = useState();
  const [selected, setSelected] = useState();

  const radio = [
    {
      name: "Default",
      var: (
        <Radio
          options={["a", "b", "c"]}
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
          options={["test", "tessssr", "baaa"]}
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
      Name: "option",
      Params: "",
      Description:
        "the props 'option' will receive an array of option, maximal 3 options and minimum 2 options",
    },
    {
      Name: "radioType",
      Params: "default, list",
      Description:
        "the props 'radioType' will decide the display of radio button, either a row direction or column ",
    },
    {
      Name: "selected",
      Params: "",
      Description: "the props 'selected' will receive a state as props ",
    },
    {
      Name: "setSelected",
      Params: "",
      Description: "the props 'setSelected' will receive a setState as props ",
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
    </Layout>
  );
};

export default RadiobtnPage;
