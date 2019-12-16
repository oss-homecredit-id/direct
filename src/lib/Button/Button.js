import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { colors } from "../../assets/mixins/mixins";

const ButtonStyle = styled.button`
  background-color: ${props =>
    props.variant === "primary"
      ? colors.mainRed
      : props.variant === "secondary"
      ? colors.mainWhite
      : props.variant === "text"
      ? "transparent"
      : props.disabled
      ? colors.disabledGrey
      : colors.mainRed};
  padding: 10px 20px;
  margin: 5px;
  color: ${props =>
    props.variant === "primary"
      ? colors.mainWhite
      : props.variant === "secondary"
      ? colors.mainRed
      : props.variant === "text"
      ? colors.mainRed
      : colors.mainWhite};
  display: inline-flex;
  border-radius: 8px;
  border: none;
  &:hover,
  &:active,
  &:focus {
    background: ${props =>
      props.variant === "secondary"
        ? colors.mainWhite
        : props.disabled
        ? colors.disabledGrey
        : colors.clickedRed};
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
    outline: 0;
  }
`;

const Button = ({ variant, disabled, ...props }) => {
  return (
    <ButtonStyle
      variant={variant}
      disabled={disabled}
      style={props.styleConfig}
      {...props}
    />
  );
};

export { Button };

Button.propTypes = {
  variant: PropTypes.string.isRequired,
};

Button.defaultProps = {
  variant: "primary",
};
