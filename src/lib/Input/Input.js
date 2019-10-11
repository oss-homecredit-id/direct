import React, { useState } from "react";
import styled from "@emotion/styled";

const Input = ({ withIcon, isDisabled, isError, isSuccess, ...props }) => {
  const Container = styled.div(props => ({
    display: "flex",
    alignItems: "center",
    padding: props.withIcon ? "5px" : "8px",
    background: props.isDisabled ? "#f3f1f1" : "white",
    borderRadius: props.withIcon ? "8px" : "3px",
    border: props.withIcon ? "solid 1px #ffffff" : "solid 1px #bfbfbf",
    margin: "30px 5px",
    width: "100%",
    outline: "none",
    cursor: props.isDisabled ? "not-allowed" : "null",
    "&:focus-within": props.isDisabled
      ? null
      : {
          border: props.isError ? "solid 1px #fc974d" : "solid 1px #e11931",
          div: {
            color: props.isError ? "#fc974d" : "#e11931",
          },
        },
  }));

  const Label = styled.div(props => ({
    display: props.withIcon ? "none" : "unset",
    position: "relative",
    padding: "0 3px",
    background: isDisabled ? "#f3f1f1" : "white",
    top: "-24px",
    color: "#bfbfbf",
    fontSize: "13px",
    fontFamily: "century gothic",
  }));

  const Input = styled.input(props => ({
    position: props.withIcon ? "unset" : "absolute",
    border: props.withIcon ? "none" : "1px",
    marginLeft: props.withIcon ? "8px" : "unset",
    padding: "3px",
    fontFamily: "century gothic",
    outline: "none",
    backgroundColor: isDisabled ? "#f3f1f1" : "white",
    width: props.withIcon ? "100%" : "unset",
  }));

  const iconInput = styled.div({
    width: "30px",
    height: "auto",
    marginLeft: "8px",
    marginBottom: "0",
    paddingRight: "8px",
    borderRight: "1px solid grey",
  });

  const styles = {
    icon: {
      width: "30px",
      height: "auto",
      marginLeft: "8px",
      marginBottom: "0",
      paddingRight: "8px",
      borderRight: "1px solid grey",
    },
  };

  let icon = null;

  if (withIcon) {
    icon = <img style={styles.icon} src={props.src}></img>;
  }

  return (
    <Container
      withIcon={withIcon}
      isDisabled={isDisabled}
      isError={isError}
      isSuccess={isSuccess}
      tabIndex="0"
    >
      <Label withIcon={withIcon}>{props.children}</Label>
      {icon}
      <Input
        withIcon={withIcon}
        placeholder={withIcon ? props.children : null}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onClick={props.onClick}
        disabled={isDisabled}
      ></Input>
    </Container>
  );
};

export { Input };
