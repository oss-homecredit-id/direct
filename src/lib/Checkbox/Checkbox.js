import React from "react";
import { css } from "@emotion/core";
import { colors } from "../../assets/mixins/mixins";

const Checkbox = ({ options, disabled, children }) => {
  return (
    <div>
      {options ? (
        options.map((something, key) => {
          return (
            <label
              key={key}
              className="checkbox-container"
              css={css`
                display: block;
                position: relative;
                padding-left: 35px;
                margin-bottom: 12px;
                cursor: pointer;
                color: ${something.disabled
                  ? colors.secondaryBlack
                  : colors.darkerBlack};
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                .checkmark:after {
                  left: 8px;
                  top: 4px;
                  width: 7px;
                  height: 12px;
                  border: solid white;
                  border-width: 0 3px 3px 0;
                  -webkit-transform: rotate(45deg);
                  -ms-transform: rotate(45deg);
                  transform: rotate(45deg);
                }
                &:hover {
                  cursor: ${something.disabled ? "not-allowed" : "pointer"};
                }
              `}
            >
              {something.label}
              <input
                disabled={something.disabled ? true : false}
                type="checkbox"
                css={css`
                  position: absolute;
                  opacity: 0;
                  cursor: pointer;
                  height: 0;
                  width: 0;
                  &:checked ~ .checkmark {
                    background-color: ${colors.primaryRed};
                    border-color: ${colors.primaryRed};
                  }
                  &:checked ~ .checkmark:after {
                    display: block;
                  }
                `}
              ></input>
              <span
                className="checkmark"
                css={css`
                  position: absolute;
                  top: 0;
                  left: 0;
                  height: 25px;
                  width: 25px;
                  background-color: ${something.disabled
                    ? colors.lighterBlack
                    : colors.mainWhite};
                  border: solid 1px
                    ${something.disabled
                      ? colors.secondaryBlack
                      : colors.primaryRed};
                  border-radius: 3px;
                  &:after {
                    content: "";
                    position: absolute;
                    display: none;
                  }
                `}
              ></span>
            </label>
          );
        })
      ) : (
        <div>
          <label
            className="checkbox-container"
            css={css`
              display: block;
              position: relative;
              padding-left: 35px;
              margin-bottom: 12px;
              cursor: pointer;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
              .checkmark:after {
                left: 8px;
                top: 4px;
                width: 7px;
                height: 12px;
                border: solid white;
                border-width: 0 3px 3px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
              }
            `}
          >
            {children}
            <input
              css={css`
                position: absolute;
                opacity: 0;
                cursor: pointer;
                height: 0;
                width: 0;
                &:checked ~ .checkmark {
                  background-color: ${colors.primaryRed};
                  border-color: ${colors.primaryRed};
                }
                &:checked ~ .checkmark:after {
                  display: block;
                }
              `}
              disabled={disabled ? true : false}
              type="checkbox"
            ></input>
            <span
              className="checkmark"
              css={css`
                position: absolute;
                top: 0;
                left: 0;
                height: 25px;
                width: 25px;
                background-color: white;
                border: solid 1px ${colors.primaryRed};
                border-radius: 3px;
                &:after {
                  content: "";
                  position: absolute;
                  display: none;
                }
              `}
            ></span>
          </label>
        </div>
      )}
    </div>
  );
};

export { Checkbox };
