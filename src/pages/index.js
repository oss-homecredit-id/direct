import React from "react";
import { MainLayout } from "../components/MainLayout";
import PageTemplate from "../components/PageTemplate";
import { CodeBlock } from "../components/BlockComponents";

const IndexPage = () => {
  const title = "Introduction";
  const subTitle = "Direct Design System of Home Credit Indonesia";

  const text = `  import Mantap from "cihuy";

  const SomeRandomComponents = () => {
    console.log("function");
    return (
      <div style={{fontSize: "3rem"}}>
        <h1>Hello World!</h1>
      </div>
    );
  };`;

  const wo = `  class MyHomePage extends StatefulWidget {
    MyHomePage({Key key, this.title}) : super(key: key);

    final String title;

    @override
      _MyHomePageState createState() => _MyHomePageState();
    }
  }`;

  const command = `  npm install putang-ina-mo`;

  return (
    <MainLayout title="Home">
      <PageTemplate title={title} subTitle={subTitle}>
        <CodeBlock code={text} theme="dracula" />
        <CodeBlock code={wo} theme="nightOwl" />
        <CodeBlock code={command} theme="shadesOfPurple" />
      </PageTemplate>
    </MainLayout>
  );
};

export default IndexPage;
