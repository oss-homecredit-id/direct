import React from "react";
import Layout from "../../components/layout";
import CompLayout from "../../components/CompLayout/CompLayout";
import { Number } from "../../lib/Number/Number";

const NumberPage = () => {
  const numberList = ["1", "2", "3", "4", "5"];

  const number = [
    {
      name: "Default",
      var: numberList.map(number => <Number number={number}></Number>),
    },
  ];

  return (
    <Layout>
      <CompLayout
        compName="Number"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={number}
      ></CompLayout>
    </Layout>
  );
};

export default NumberPage;
