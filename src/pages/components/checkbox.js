import React from "react";
import CompLayout from "../../components/CompLayout/CompLayout";
import Layout from "../../components/layout";
import { Block } from "../../lib/Block/Block";
import icon from "../../assets/icon-logo.png";
import { Checkbox } from "../../lib/Checkbox/Checkbox";

const CheckboxPage = () => {
  const card = [
    {
      name: "Default",
      var: (
        <div className="checkbox-wrapper">
          <Checkbox label="item 1"></Checkbox>
          <Checkbox label="item 2"></Checkbox>
          <Checkbox label="item 3"></Checkbox>
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
