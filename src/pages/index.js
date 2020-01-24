import React from "react";
import { MainLayout } from "../components/MainLayout";
import PageTemplate from "../components/PageTemplate";
import { CodeBlock } from "../components/BlockComponents";

const IndexPage = () => {
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
      <PageTemplate>
        <h1>Introduction</h1>
        <h5>Direct Design System</h5>
        <br />
        <p>
          The purpose of lorem ipsum is to create a natural looking block of
          text (sentence, paragraph, page, etc.) that doesn't distract from the
          layout. A practice not without controversy, laying out pages with
          meaningless filler text can be very useful when the focus is meant to
          be on design, not content.{" "}
        </p>
        <CodeBlock code={text} theme="dracula" />
        <CodeBlock code={wo} theme="nightOwl" />
        <CodeBlock code={command} theme="shadesOfPurple" />
      </PageTemplate>
    </MainLayout>
  );
};

export default IndexPage;
