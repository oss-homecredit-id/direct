import React from "react";
import styled from "@emotion/styled";

const ButtonStyle = styled.button`
  background-color: ${props => (props.filled ? "#E11931" : "#fff")};
  border: 2px solid #e11931;
  padding: 10px 15px;
  margin: 5px;
  color: ${props => (props.filled ? "#fff" : "#E11931")};
  display: inline-flex;
  border-radius: ${props => (props.rounded ? "20px" : "5px")};
  &:hover {
    cursor: pointer;
  }
`;

const Button = ({ filled, rounded, ...props }) => {
  return <ButtonStyle filled={filled} rounded={rounded} {...props} />;
};

export { Button };
