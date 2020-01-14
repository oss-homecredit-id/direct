import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";

const Select = ({ setSelected, dropdownList }) => {
  const Container = styled.div`
    margin: 10px;
    position: relative;
  `;

  const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1px;
    border: 1px solid #e9e9e9;
    border-radius: 8px;
    background-color: #ffffff;
    width: 250px;
    box-shadow: inset 0 0.5px 1.5px 0 rgba(0, 0, 0, 0.5);
    cursor: pointer;
    & > focus {
      border: 1px solid $primary-red;
    }
  `;

  const Caret = styled.span`
    margin: 0 8px 0 4px;
    width: 0;
    height: 0;
    vertical-align: middle;
    border-top: 6px dashed;
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
    position: relative;
  `;

  const SelectedHeader = styled.p`
    margin: 10px;
    color: #9f9f9f;
    max-width: 90%;
  `;

  const SelectContainer = styled.ul`
    position: absolute;
    padding: 1px;
    border: 1px solid #e9e9e9;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: inset 0 0.5px 1.5px 0 rgba(0, 0, 0, 0.5);
    cursor: pointer;
    width: 100%;
    margin: 10px 0;
    overflow: auto;
    max-height: 315px;
  `;

  const SelectContainerHide = styled.ul`
    display: none;
  `;

  const SelectList = styled.li`
    list-style: none;
    padding: 10px;
  `;

  const selectBoxRef = useRef();
  const [dropdownListItems, setDropdownListItems] = useState([]);
  const [showList, setShowList] = useState(false);
  const [selectedItem, setSelectedItem] = useState({ id: 0, name: "" });

  let selectedHeaderClass = "select-header";

  if (selectedItem.id !== 0) selectedHeaderClass = "select-header selected";

  const showingList = () => {
    setShowList(!showList);
  };

  const setSelectList = item => {
    if (setSelected) setSelected(item);
    setSelectedItem(item);
    setShowList(false);
    console.log(item);
  };

  const handleClickOutside = event => {
    const isClickOutside = !selectBoxRef.current.contains(event.target);
    if (isClickOutside) {
      setShowList(false);
      document.removeEventListener("mousedown", handleClickOutside);
    }
  };

  useEffect(() => {
    setDropdownListItems(dropdownList);
    setSelectedItem(dropdownList[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (showList) document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showList]);
  console.log(selectedItem.name);

  return (
    <Container ref={selectBoxRef}>
      <Header onClick={showingList}>
        <SelectedHeader>{selectedItem.name} </SelectedHeader>
        <Caret></Caret>
      </Header>

      {showList ? (
        <SelectContainer>
          {dropdownListItems.map(list => (
            <SelectList key={list.id} onClick={() => setSelectList(list)}>
              {list.name}
            </SelectList>
          ))}
        </SelectContainer>
      ) : (
        <SelectContainerHide></SelectContainerHide>
      )}
    </Container>
  );
};

export { Select };
