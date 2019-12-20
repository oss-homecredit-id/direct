import React, { useState } from "react";
import Layout from "../../components/layout";
import CompLayout from "../../components/CompLayout/CompLayout";
import { Radio } from "../../lib";

const RadiobtnPage = () => {
  const [radioSelected, setRadioSelected] = useState();

  const radio = [
    {
      name: "Default",
      var: (
        <Radio
          option1="option 1"
          option2="option 2"
          selected={radioSelected}
          setSelected={setRadioSelected}
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
    </Layout>
  );
};

export default RadiobtnPage;
