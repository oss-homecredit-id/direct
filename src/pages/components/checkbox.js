import React, { useState } from "react";
import CompLayout from "../../components/CompLayout/CompLayout";
import Layout from "../../components/layout";
import { Checkbox } from "../../lib/Checkbox/Checkbox";

const defaultOptions = [
  {
    label: "This checkbox is disabled",
    value: "first",
    disabled: true,
  },
  {
    label: "You can check this one",
    value: "second",
  },
  {
    label: "This one too",
    value: "third",
  },
];

const propsData = [
  {
    Name: "options",
    Params: "",
    Description:
      "The props 'options' will receive several options as an array of string",
  },
  {
    Name: "name",
    Params: "",
    Description:
      "When two or more checkbox have the same name, they will automatically be in the same group",
  },
  {
    Name: "disabled",
    Params: "",
    Description:
      "the props 'disabled' that is added to the component will make the component unable to be checked",
  },
  {
    Name: "checked",
    Params: "",
    Description: "the props 'selected' will receive a state as props ",
  },
  {
    Name: "setChecked",
    Params: "",
    Description: "the props 'setSelected' will receive a setState as props ",
  },
];

const singleCheckbox = [{ label: "awawa", value: "terserah" }];

const CheckboxPage = () => {
  const [selected, setSelected] = useState();
  const [selectedDefault, setSelectedDefault] = useState();

  const card = [
    {
      name: "Default",
      var: (
        <div className="checkbox-wrapper">
          <Checkbox
            name="satu"
            options={singleCheckbox}
            checked={selectedDefault}
            setChecked={setSelectedDefault}
          ></Checkbox>
          <style jsx="true">{`
            .checkbox-wrapper {
              display: flex;
              flex-direction: column;
            }
          `}</style>
        </div>
      ),
      code: `<Checkbox
            name="checkboxgroup"
            options={singleCheckbox}
            checked={selectedDefault}
            setChecked={setSelectedDefault}
          ></Checkbox>`,
    },
    {
      name: "With options",
      var: (
        <div className="checkbox-wrapper">
          <Checkbox
            name="yahu"
            checked={selected}
            setChecked={setSelected}
            options={defaultOptions}
          ></Checkbox>
          <style jsx="true">{`
            .checkbox-wrapper {
              display: flex;
              flex-direction: column;
            }
          `}</style>
        </div>
      ),

      code: `<Checkbox
            name="checkboxgroup"
            checked={selected}
            setChecked={setSelected}
            options={defaultOptions}
          ></Checkbox>`,
    },
  ];
  return (
    <Layout>
      <CompLayout
        compName="Checkbox"
        compDesc="Checkboxes are used to let a user choose one or more options from a limited number of options. You can also use this component for one option only."
        compVariation={card}
        compProps={propsData}
      ></CompLayout>
    </Layout>
  );
};

export default CheckboxPage;
