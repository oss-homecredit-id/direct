import React from "react";
import CompLayout from "../../components/CompLayout/CompLayout";
import Layout from "../../components/layout";
import { Modal } from "../../lib/Modal/Modal";

const ModalPage = () => {
  const list = [
    {
      name: "Default",
      var: <div className="tes">coba klik yg lain</div>,
    },
    {
      name: "Blank",
      var: <Modal>blank</Modal>,
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
        compName="List"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={list}
        compProps={propsData}
      ></CompLayout>
    </Layout>
  );
};

export default ModalPage;
