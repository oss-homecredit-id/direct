import React from "react";
import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";

const Placeholder = ({ lines }) => {
  const linear = keyframes`
    0% {
        background-position: -1000px 0;
      }
    
    100% {
        background-position: 600px 0;
      }
    `;

  const AnimatedBg = styled.div`
    animation-duration: 2s;
    animation-name: ${linear};
    animation-iteration-count: infinite;
    background: #f6f7f8;
    background: linear-gradient(to right, #eeeeee 8%, #cccccc 15%, #eeeeee 40%);
    background-size: 1800px 104px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  `;

  const FullLine = styled.div`
    background: #fff;
    margin: 0;
    height: 40%;
  `;

  const EndLine = styled.div`
    background: #fff;
    margin: 0;
    height: 60%;
  `;

  const makeLine = () => {
    let line = [];

    for (let i = 0; i < lines; i++) {
      line.push(
        <EndLine
          key={Math.random()}
          style={{ width: Math.floor(Math.random() * 45) + 12 }}
        ></EndLine>
      );
      line.push(
        <FullLine key={Math.random()} style={{ width: "100%" }}></FullLine>
      );
    }
    return line;
  };

  return (
    <div
      style={{
        display: "grid",
        padding: "10px",
        height: "inherit",
        width: "100%",
        minHeight: lines > 3 ? "120px" : "50px",
        backgroundColor: "white",
      }}
    >
      <AnimatedBg>{makeLine()}</AnimatedBg>
      {/* <div className="animated-bg">{makeLine()}</div> */}
    </div>
  );
};

export { Placeholder };
