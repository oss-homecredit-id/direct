import React from "react";
import styled from "@emotion/styled";

const H1 = props => {
  const H1 = styled.h1({
    fontSize: 30,
    margin: props.margin ? props.margin : 0,
  });

  return <H1>{props.children} </H1>;
};

const H2 = props => {
  const H2 = styled.h1({
    fontSize: 25,
    margin: props.margin ? props.margin : 0,
  });

  return <H2>{props.children} </H2>;
};

const H3 = props => {
  const H3 = styled.h1({
    fontSize: 20,
    margin: props.margin ? props.margin : 0,
  });

  return <H3>{props.children} </H3>;
};

const H4 = props => {
  const H4 = styled.h1({
    fontSize: 18,
    margin: props.margin ? props.margin : 0,
  });

  return <H4>{props.children} </H4>;
};

const H5 = props => {
  const H5 = styled.h1({
    fontSize: 16,
    margin: props.margin ? props.margin : 0,
  });

  return <H5>{props.children} </H5>;
};

const H6 = props => {
  const H6 = styled.h1({
    fontSize: 14,
    margin: props.margin ? props.margin : 0,
  });

  return <H6>{props.children} </H6>;
};

export { H1, H2, H3, H4, H5, H6 };
