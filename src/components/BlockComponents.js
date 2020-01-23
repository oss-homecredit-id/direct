import React from "react";

const CodeBlock = ({ literals }) => {
  return (
    <React.Fragment>
      <div className="code-wrapper">
        <pre className="pre-code">{literals}</pre>
      </div>
      <style jsx="true">{`
        .code-wrapper {
          border: 1px solid black;
          margin: 2rem 0rem;
        }
        .pre-code {
        }
      `}</style>
    </React.Fragment>
  );
};

export { CodeBlock };
