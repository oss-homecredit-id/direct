import React from "react";
import { Input } from "../../lib/Input/Input";
import { Button } from "../../lib/Button/Button";
import Layout from "../../components/layout";
import TemplateLayout from "../../components/TemplateLayout/TemplateLayout";
import { Headings, H3, H2 } from "../../lib/Headings/Headings";

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
      <TemplateLayout>
        <div style={styles.container}>
          <H2 margin="10px 0 15px">Selamat Datang</H2>
          <H3>Log in</H3>
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
