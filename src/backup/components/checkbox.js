import React from "react";
import CompLayout from "../../components/CompLayout/CompLayout";
import {MainLayout} from "../../components/MainLayout";
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
    },
  ];
  return (
    <Layout>
      <CompLayout
        compName="Checkbox"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={card}
        compProps={propsData}
      ></CompLayout>
    </Layout>
  );
};

export default CheckboxPage;
