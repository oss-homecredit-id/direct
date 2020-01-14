import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";
import { colors } from "../../assets/mixins/mixins";
import down from "../../assets/chevron_down.png";
import up from "../../assets/chevron_top.png";
import password from "../../assets/password_icon.png";

const Input = props => {
  const {
    label,
    type,
    name,
    value,
    onChange,
    onClick,
    isError,
    isHelper,
    placeholder,
    selectOpen,
  } = props;


  return (
    <div
      css={css`
        position: relative;
        margin-bottom: 15px;
      `}
      style={type === "select" ? { margin: 0 } : {}}
    >
      {/* change conditional style with emotion */}
      <label
        css={css`
          font-size: 12px;
        `}
      >
        {label}
      </label>
      <input
        css={css`
          display: block;
          width: 100%;
          height: 40px;
          padding: 2px 8px;
          font-size: 16px;
          border: none;
          border-bottom: 1px solid #7b7b7b;
          border-color: ${isError ? colors.mainRed : "none"};
          background-color: ${colors.lightGrey};
          border-top-right-radius: 4px;
          border-top-left-radius: 4px;
          &:focus {
            border-bottom: 2px solid ${colors.mainBlack};
          }
          &:active {
            border-bottom: 2px solid ${colors.mainBlack};
          }
        `}
        type={type === "select" ? "text" : type}
        name={name}
        value={value}
        placeholder={placeholder}
        autoComplete={type === "select" ? "off" : "on"}
        onChange={onChange}
        onClick={type === "select" ? onClick : undefined}
      />
      {type !== "text" && (
        <span
          css={css`
            position: absolute;
            right: 10px;
            bottom: 5px;
          `}
        >
          {type === "password" && <img src={password} alt="hide" />}
          {type === "select" && !selectOpen && <img src={down} alt="hide" />}
          {type === "select" && selectOpen && <img src={up} alt="hide" />}
        </span>
      )}
      {isHelper && !isError && (
        <small
          css={css`
            color: ${colors.orangeHelper};
          `}
        >
          {isHelper}
        </small>
      )}
      {isError && (
        <small
          css={css`
            color: ${isError ? colors.mainRed : colors.orangeHelper};
          `}
        >
          {isError}
        </small>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Input.defaultProps = {
  type: "text",
};

export { Input };
