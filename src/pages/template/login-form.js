import React from "react";
import { Input } from "../../lib/Input/Input";
import { Button } from "../../lib/Button/Button";
import Layout from "../../components/layout";
import TemplateLayout from "../../components/TemplateLayout/TemplateLayout";

const loginForm = () => {
  const styles = {
    container: {
      backgroundColor: "white",
      padding: "20px",
      width: "300px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: "8px",
      boxShadow: "0 8px 13px 0 rgba(0, 0, 0, 0.12)",
    },
  };

  return (
    <Layout>
      <TemplateLayout tempName="Login Form">
        <div style={styles.container}>
          <Input>Tanggal Lahir</Input>
          <Input>Nomor HP</Input>
          <Button filled size="sm">
            Masuk
          </Button>
        </div>
      </TemplateLayout>
    </Layout>
  );
};

export default loginForm;
