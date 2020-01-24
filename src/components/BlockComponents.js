import React from "react";
import { string, oneOf } from "prop-types";

import Highlight, { defaultProps } from "prism-react-renderer";

import nightOwl from "prism-react-renderer/themes/nightOwl";
import dracula from "prism-react-renderer/themes/dracula";
import shadesOfPurple from "prism-react-renderer/themes/shadesOfPurple";

const CodeBlock = ({ code, theme }) => {
  const themes = {
    nightOwl: nightOwl,
    dracula: dracula,
    shadesOfPurple: shadesOfPurple,
  };
  return (
    <Highlight
      {...defaultProps}
      code={code}
      theme={themes[theme]}
      language="jsx"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <StartBlock className={className} style={style}>
          {tokens.map((line, i) => (
            <div
              key={`line_${i}`}
              {...getLineProps({ line, key: i })}
              style={{ overflowX: "scroll" }}
            >
              <LineNumber>{i + 1}</LineNumber>
              <span>
                {line.map((token, key) => (
                  <span key={`token_${key}`} {...getTokenProps({ token, key })}>
                    <LineCode>{token.content}</LineCode>
                  </span>
                ))}
              </span>
            </div>
          ))}
        </StartBlock>
      )}
    </Highlight>
  );
};

const StartBlock = ({ children, className, style }) => {
  return (
    <React.Fragment>
      <pre className={`${className} start-block`} style={style}>
        {children}
      </pre>
      <style jsx="true">{`
        .start-block {
          border-radius: 16px;
          line-height: 1.3;
          margin: 2rem 0;
          padding: 1em;
          width: 100%;
          overflowx: scroll;
        }
      `}</style>
    </React.Fragment>
  );
};

const LineNumber = ({ children }) => {
  return (
    <span
      style={{
        margin: "12px 0px",
        textAlign: "center",
        fontWeight: "lighter",
        fontSize: "0.8rem",
      }}
    >
      {children}
    </span>
  );
};

const LineCode = ({ children }) => {
  return (
    <span style={{ fontFamily: "monospace", fontSize: "0.9rem" }}>
      {children}
    </span>
  );
};

CodeBlock.propTypes = {
  code: string.isRequired,
  theme: oneOf(["dracula", "nightOwl", "shadesOfPurple"]),
};

// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
// const Component = () => {
//   const codeString = "(num) => num + 1";
//   return (
//     <SyntaxHighlighter language="javascript" style={dark}>
//       {codeString}
//     </SyntaxHighlighter>
//   );
// };
export { CodeBlock };
