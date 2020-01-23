import React from "react";
import Layout from "../components/layout";
import { Text } from "../lib/Text/Text";
import CodeContainer from "../components/CodeContainer/CodeContainer";

const HowtoPage = () => {
  const styles = {
    title: {
      margin: "25px 0",
      fontSize: "45px",
    },
  };

  const howTo = [
    {
      label: "Install Direct component library via NPM:",
      code: "npm i reactjs-direct",
    },
    {
      label: "Import component to your project:",
      code: "import { Button } from ' '",
    },
    {
      label: "Use your component in your project:",
      code: `const YourProject = () => {
          return (
            <div>
              <Button></Button> 
            </div> )
          };`,
    },
  ];

  return (
    <Layout>
      <div>
        <Text styleConfig={styles.title}>How to Use</Text>
        <Text textType="h3">
          Direct Design System is a collection of reusable components that can
          be used depending on the team's needs. Here is the instruction on how
          to use them:
        </Text>
        {howTo.map((how, key) => (
          <CodeContainer label={how.label}>
            <pre>{how.code}</pre>
          </CodeContainer>
        ))}
      </div>
    </Layout>
  );
};

export default HowtoPage;
