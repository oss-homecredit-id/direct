import React from "react";
import styled from "@emotion/styled";

const H1 = styled.p`
  font-size: 30px;
`;
const H2 = styled.p`
  font-size: 25px;
`;
const H3 = styled.p`
  font-size: 20px;
`;
const H4 = styled.p`
  font-size: 18px;
`;
const H5 = styled.p`
  font-size: 16px;
`;
const H6 = styled.p`
  font-size: 14px;
`;

const Text = props => {
  switch (props.textType) {
    case "h1":
      return <H1 style={props.styleConfig}>{props.children} </H1>;
    case "h2":
      return <H2 style={props.styleConfig}>{props.children} </H2>;
    case "h3":
      return <H3 style={props.styleConfig}>{props.children} </H3>;
    case "h4":
      return <H4 style={props.styleConfig}>{props.children}</H4>;
    case "h5":
      return <H5 style={props.styleConfig}>{props.children}</H5>;
    case "h6":
      return <H6 style={props.styleConfig}>{props.children}</H6>;
    default:
      return <p style={props.styleConfig}>{props.children} </p>;
  }
};

export { Text };
