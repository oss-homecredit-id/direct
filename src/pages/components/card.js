import React from "react";
import CompLayout from "../../components/CompLayout/CompLayout";
import { Card } from "../../lib";
import Layout from "../../components/layout";

const CardPage = () => {
  return (
    <Layout>
      <CompLayout
        compName="Card"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={["one", "two"]}
      >
        <Card></Card>
      </CompLayout>
    </Layout>
  );
};

export default CardPage;
