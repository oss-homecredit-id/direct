import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { colors } from "../../assets/mixins/mixins";
import { Input } from "../INput/Input";
import { css } from "@emotion/core";

export const Select = props => {
  const { option, value, label, selected } = props;
  const [selectedValue, setSelectedValue] = useState("");
  const [selectOpen, setSelectOpen] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(option);
    if (option.length != 0) {
      setSelectedValue(option[0][value]);
    }
  }, [option]);

  const openSelect = () => {
    setSelectOpen(!selectOpen);
  };

  const filterSelect = e => {
    const filterData = e.target.value;
    setSelectedValue(filterData);
    const filtered = option.filter(
      value => value.nameCategory.toLowerCase().indexOf(filterData) !== -1
    );
    setOptions(filtered);
  };

  const handleClick = event => {
    const value = event.target.getAttribute("data-value");
    setSelectedValue(value);
    setOptions(option);
    setSelectOpen(false);
  };

  return (
    <React.Fragment>
      <Input
        type="select"
        name="category"
        label="Category"
        value={selectedValue}
        selectOpen={selectOpen}
        onClick={openSelect}
        onChange={e => filterSelect(e)}
      />
      {selectOpen && (
        <ul
          css={css`
            margin: 5px 0 15px 0;
            padding: 0;
            max-height: 11.5rem;
            overflow: auto;
          `}
        >
          {options.map((dataOption, index) => (
            <li
              css={css`
                padding: 0.8rem 1.8rem;
                background: ${colors.lightGrey}
                border-top: 1px solid ${colors.borderGrey};
                border-bottom: 1px solid ${colors.borderGrey};
                &:first_child {
                  border-top: none;
                }
                &:last-child {
                  border-bottom: none;
                }
              `}
              onClick={e => handleClick(e)}
              key={index}
              data-value={dataOption[value]}
            >
              {dataOption[label]}
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};

Select.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

Select.defaultProps = {
  value: "value",
  label: "label",
  options: [],
};
