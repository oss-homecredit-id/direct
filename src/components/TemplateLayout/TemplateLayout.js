import React from "react";
import "./TemplateLayout.css";
import { Text } from "../../lib/Text/Text";

const TemplateLayout = ({ tempName, tempDesc, children, tempCode }) => {
  const styles = {
    title: {
      fontSize: "34px",
      fontWeight: "500",
      marginBottom: "15px",
    },
    desc: {
      marginBottom: "15px",
    },
    preview: {
      fontWeight: "500",
      margin: "15px 0 10px 0",
    },
  };

  return (
    <div className="temp-container">
      <Text styleConfig={styles.title}>{tempName}</Text>
      <Text textType="h3" styleConfig={styles.desc}>
        {tempDesc}
      </Text>
      <div style={{ margin: "30px 0" }}>
        <Text textType="h3" styleConfig={styles.preview}>
          Preview
        </Text>
        <div className="temp-preview">{children}</div>
      </div>
      <div className="temp-code">
        <pre>{tempCode}</pre>
      </div>
    </div>
  );
};

export default TemplateLayout;
