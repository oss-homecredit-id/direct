import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../assets/mixins/mixins";

const ButtonStyle = styled.button`
  background-color: ${props =>
    props.variant === "filled"
      ? colors.mainRed
      : props.variant === "nude"
      ? colors.mainWhite
      : colors.mainRed};
  padding: ${props =>
    props.size === "tiny"
      ? "5px 8px"
      : props.size === "sm"
      ? "10px 20px"
      : props.size === "md"
      ? "15px 30px"
      : props.size === "lg"
      ? "20px 40px"
      : "10px 20px"};
  margin: 5px;
  color: ${props =>
    props.variant === "filled"
      ? colors.mainWhite
      : props.variant === "nude"
      ? colors.mainRed
      : colors.mainWhite};
  display: inline-flex;
  box-shadow: ${props =>
    props.variant === "nude"
      ? "10px 10px 19px -8px rgba(155,155,155,0.75)"
      : "none"};
  border-radius: ${props => (props.type === "rounded" ? "20px" : "8px")};
  border: none;
  &:hover,
  &:active,
  &:focus {
    background: ${props =>
      props.variant === "nude" ? colors.mainWhite : colors.clickedRed};
    cursor: pointer;
    outline: 0;
  }
`;

const Button = ({ variant, type, size, ...props }) => {
  return <ButtonStyle variant={variant} type={type} size={size} {...props} />;
};

export { Button };
