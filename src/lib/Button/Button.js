import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { colors } from "../../assets/mixins/mixins";

const ButtonStyle = styled.button`
  background-color: ${props =>
    props.isDisabled
      ? colors.secondaryBlack
      : props.variant === "primary"
      ? colors.primaryRed
      : props.variant === "secondary"
      ? colors.mainWhite
      : props.variant === "text"
      ? "transparent"
      : colors.primaryRed};
  padding: 10px 20px;
  outline: none;
  margin: 5px;
  color: ${props =>
    props.variant === "primary"
      ? colors.mainWhite
      : props.variant === "secondary"
      ? colors.primaryRed
      : props.variant === "text"
      ? colors.primaryRed
      : colors.mainWhite};
  display: inline-flex;
  border-radius: 8px;
  border: ${props => (props.variant === "text" ? "none" : "1px solid")};
  border-color: ${props =>
    props.isDisabled
      ? colors.secondaryBlack
      : props.variant === "primary"
      ? colors.primaryRed
      : props.variant === "secondary"
      ? colors.primaryRed
      : "transparent"};
  &:hover,
  &:active,
  &:focus {
    background: ${props =>
      props.isDisabled
        ? colors.secondaryBlack
        : props.variant === "secondary"
        ? colors.mainWhite
        : props.variant === "text"
        ? "unset"
        : colors.primaryRed};
    cursor: ${props => (props.isDisabled ? "not-allowed" : "pointer")};
    outline: 0;
  }
`;

const Button = ({ variant, isDisabled, ...props }) => {
  return (
    <React.Fragment>
      <ButtonStyle
        variant={variant}
        isDisabled={isDisabled}
        style={props.styleConfig}
        onClick={props.onClick}
        {...props}
      />
    </React.Fragment>
  );
};

export { Button };

Button.propTypes = {
  variant: PropTypes.string.isRequired,
};

Button.defaultProps = {
  variant: "primary",
};
