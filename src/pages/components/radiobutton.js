import React, { useState } from "react";
import { MainLayout } from "../../components/Navigation/MainLayout";
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
      code: `
      <Radio
          options={["a", "b", "c"]}
          name="row"
          selected={radioSelected}
          setSelected={setRadioSelected}
        ></Radio>
      `,
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
      code: `
      <Radio
      options={["test", "tessssr", "baaa"]}
      name="display"
      selected={selected}
      setSelected={setSelected}
      radioType="list"
    ></Radio>
      `,
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
    <MainLayout>
      <CompLayout
        compName="Radio Button"
        compDesc="Used when users must select exactly one option from an exposed list of options. You can either use a default type or the list type"
        compVariation={radio}
        compProps={propsData}
      ></CompLayout>
    </MainLayout>
  );
};

export default RadiobtnPage;
