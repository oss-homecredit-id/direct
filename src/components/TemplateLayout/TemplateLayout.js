import React from "react";
import "./TemplateLayout.css";
import { Text } from "../../lib/Text/Text";

const TemplateLayout = ({ tempName, tempDesc, children, tempCode, color }) => {
  const styles = {
    title: {
      fontSize: "34px",
      fontWeight: "500",
      marginBottom: "15px",
    },
    desc: {
      marginBottom: "15px",
    },
    previewText: {
      fontWeight: "500",
      margin: "15px 0 10px 0",
    },
    preview: {
      display: "flex",
      flexDirection: color ? "column" : "row",
      justifyContent: "center",
    },
  };

  return (
    <div className="temp-container">
      <Text styleConfig={styles.title}>{tempName}</Text>
      <Text textType="h3" styleConfig={styles.desc}>
        {tempDesc}
      </Text>
      <div style={{ margin: "30px 0" }}>
        <Text textType="h3" styleConfig={styles.previewText}>
          Preview
        </Text>
        <div style={styles.preview}>{children}</div>
      </div>
      <div className="temp-code">
        <pre>{tempCode}</pre>
      </div>
    </div>
  );
};

export default TemplateLayout;
