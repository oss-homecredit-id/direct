import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Text } from "../lib/Text/Text";
import Illustration from "../assets/illustration.png";
import { colors } from "../assets/mixins/mixins";
import { MainLayout } from "../components/Navigation/MainLayout";
const IndexPage = () => {
  const styles = {
    container: {
      display: "flex",
    },
    title: {
      fontSize: "45px",
      margin: "25px 0",
      lineHeight: "1.5",
      fontWeight: "bold",
    },
    image: {
      width: "50%",
      height: "auto",
    },
  };

  return (
    <MainLayout>
      <SEO title="Direct" />
      <div style={styles.container}>
        <div>
          <Text styleConfig={styles.title}>Direct Design System</Text>
          <Text textType="h2">
            Direct is Home Credit Indonesia's design system built to help
            product teams work more efficiently
          </Text>
        </div>
        <img src={Illustration} style={styles.image}></img>
      </div>
    </MainLayout>
  );
};

export default IndexPage;
