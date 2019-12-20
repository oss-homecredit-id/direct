import React, { useEffect, useState } from "react";
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

const CheckboxPage = () => {
  const card = [
    {
      name: "Default",
      var: (
        <div className="checkbox-wrapper">
          <Checkbox>This is the default checkbox</Checkbox>
          <style jsx>{`
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
          <style jsx>{`
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
      ></CompLayout>
    </Layout>
  );
};

export default CheckboxPage;
