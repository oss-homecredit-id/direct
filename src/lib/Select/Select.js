import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { colors } from "../../assets/mixins/mixins";
import { Input } from "../Input/Input";
import { css } from "@emotion/core";

export const Select = props => {
  const { options, value, label, selected, setSelected } = props;

  // const [selectedValue, setSelectedValue] = useState("");
  const [selectOpen, setSelectOpen] = useState(false);
  const [option, setOption] = useState(options[0].label);
  console.log("test", option);

  useEffect(() => {
    setOption(options);
  }, []);

  const openSelect = () => {
    setSelectOpen(!selectOpen);
  };

  const filterSelect = e => {
    const filterData = e.target.value.toLowerCase();
    setSelected(filterData);
    // console.log(filterData);
    let filtered = options.filter(
      option => option.label.indexOf(filterData) !== -1
    );
    setOption(filtered);
    console.log("onChange", option);
  };

  const handleClick = event => {
    const label = event.target.getAttribute("data-label");
    setSelected(label);
    setOption(options);
    setSelectOpen(false);
  };

  return (
    <React.Fragment>
      <Input
        type="select"
        name="category"
        label="Category"
        value={selected ? selected : ""}
        selectOpen={selectOpen}
        onClick={openSelect}
        onChange={e => filterSelect(e)}
        role="button"
      />
      {selectOpen && (
        <div
          css={css`
            margin: 5px 0 15px 0;
            padding: 0;
            max-height: 11.5rem;
            overflow: auto;
          `}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          {option.map((dataOption, index) => (
            <div
              css={css`
                padding: 0.8rem 1.8rem;
                background: ${colors.background}
                border-top: 1px solid ${colors.lighterBlack};
                border-bottom: 1px solid ${colors.lighterBlack};
                &:nth-first-of-type {
                  border-top: none;
                }
                &:nth-last-of-type {
                  border-bottom: none;
                }
              `}
              onClick={e => handleClick(e)}
              key={index}
              data-value={dataOption[value]}
              data-label={dataOption[label]}
              role="button"
              onKeyDown={() => {}}
              tabIndex={0}
            >
              {dataOption[label]}
            </div>
          ))}
        </div>
      )}
    </React.Fragment>
  );
};
