import React from "react";
import CompLayout from "../../components/CompLayout/CompLayout";
import Layout from "../../components/layout";
import { Checkbox } from "../../lib/Checkbox/Checkbox";

const defaultOptions = [
  {
    label: "This checkbox is disabled",
    name: "first",
    disabled: true,
  },
  {
    label: "You can check this one",
    name: "second",
  },
  {
    label: "This one too",
    name: "third",
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
    Name: "children",
    Params: "",
    Description:
      "When the developer only wants to add one checkbox, the developer just have to add one sentence to the children of the component",
  },
  {
    Name: "disabled",
    Params: "",
    Description:
      "the props 'disabled' that is added to the component will make the component unable to be checked",
  },
];

const CheckboxPage = () => {
  const card = [
    {
      name: "Default",
      var: (
        <div className="checkbox-wrapper">
          <Checkbox>This is the default checkbox</Checkbox>
          <style jsx="true">{`
            .checkbox-wrapper {
              display: flex;
              flex-direction: column;
            }
          `}</style>
        </div>
      ),
      code: `<Checkbox>This is the default checkbox</Checkbox>`,
    },
    {
      name: "With options",
      var: (
        <div className="checkbox-wrapper">
          <Checkbox options={defaultOptions}></Checkbox>
          <style jsx="true">{`
            .checkbox-wrapper {
              display: flex;
              flex-direction: column;
            }
          `}</style>
        </div>
      ),
      code: `<Checkbox options={defaultOptions}></Checkbox>`,
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
