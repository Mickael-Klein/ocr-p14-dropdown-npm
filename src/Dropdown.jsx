import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const DropdownWrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: ${(props) => props.zIndex || 0};
  cursor: pointer;
`;

const InputBtn = styled.input`
  width: 100%;
  padding: 6px 10px 5px 25px;
  background-color: white;
  border: solid 1px black;
  border-radius: 5px;
  cursor: pointer;
  text-align: left;
`;

const DropdownMenu = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-height: 25vh;
  box-shadow: 0px 0px 0px 1px #242424 inset;
  border-radius: 10px;
  position: absolute;
  top: 30px;
  background-color: #242424;
  overflow: auto;
  display: flex;
  flex-flow: column;
  padding-top: 20px;
  padding-bottom: 10px;
`;

const DropdownSelectionContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 1em 0em;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding-left: 0.3em;
  background-color: #242424;
  &:hover,
  &:focus {
    background-color: #2d2d2d;
  }
`;

const DropdownSelection = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  padding-left: 15px;
  color: white;
`;

const SearchBar = styled.input`
  width: 40%;
  height: 15px;
  position: absolute;
  top: 0;
  right: 0;
  border: solid 1px #242424;
  border-radius: 0 0px 0px 10px;
  background-color: #babbbe;
  color: black;
  padding: 5px;
  box-sizing: initial;
`;

const NoDataErrMsg = styled.p`
  color: white;
`;

const Dropdown = ({ dropdownData, onChange, onReset = false, name, id }) => {
  Dropdown.propTypes = {
    dropdownData: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ).isRequired,
  };

  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [dropdownSelection, setDropdownSelection] = useState(dropdownData[0]);
  const [filteredDropdownData, setFilteredDropdownData] = useState([
    ...dropdownData,
  ]);
  const [dropdownZIndex, setDropdownZIndex] = useState(0);
  const dropdownRef = useRef(null);

  function toogleDropdown() {
    setDropdownIsOpen((state) => !state);
    setDropdownZIndex((dropdownZIndex) => (dropdownZIndex === 0 ? 10 : 0));
    if (filteredDropdownData.length < dropdownData.length) {
      setFilteredDropdownData([...dropdownData]);
    }
  }

  function handleSelectionClick(e) {
    const tagName = e.target.tagName.toLowerCase();
    if (tagName && tagName === "p") {
      setDropdownSelection(e.target.innerText);
    }
    if (tagName && tagName === "div") {
      const p = e.target.querySelector("p");
      setDropdownSelection(p.innerText);
    }
    toogleDropdown();
  }

  function filterData(e) {
    let search = e.target.value;
    if (typeof search === "string") {
      search = search.toLowerCase();
    }
    setFilteredDropdownData(
      dropdownData.filter((elem) => {
        if (typeof elem === "string") {
          elem = elem.toLowerCase();
        }
        return elem.includes(search);
      })
    );
  }

  useEffect(() => {
    onChange(dropdownSelection);
  }, [dropdownSelection]);

  useEffect(() => {
    if (onReset) {
      setDropdownIsOpen(false);
      setDropdownSelection(dropdownData[0]);
      setFilteredDropdownData([...dropdownData]);
      setDropdownZIndex(0);
    }
  }, [onReset]);

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      toogleDropdown();
    }
  };

  useEffect(() => {
    if (dropdownIsOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [dropdownIsOpen]);

  return (
    <DropdownWrapper
      zIndex={dropdownZIndex}
      className="dropdownWrapper"
      ref={dropdownRef}
    >
      <InputBtn
        type="button"
        value={dropdownSelection}
        onClick={() => {
          toogleDropdown();
        }}
        name={name}
        id={id}
      />
      {dropdownIsOpen ? (
        <DropdownMenu className="dropdownMenu">
          <SearchBar
            type="text"
            placeholder="Search"
            onChange={(e) => filterData(e)}
          />
          {filteredDropdownData.length && filteredDropdownData.length > 0 ? (
            filteredDropdownData.map((elem, index) => {
              return (
                <DropdownSelectionContainer
                  className="dropdownMenu__selectionContainer"
                  key={`dropdownMenu__selectionContainer` + index}
                  onClick={(e) => handleSelectionClick(e)}
                >
                  <DropdownSelection className="drodownMenu__selection">
                    {elem}
                  </DropdownSelection>
                </DropdownSelectionContainer>
              );
            })
          ) : (
            <NoDataErrMsg>No content to display after search</NoDataErrMsg>
          )}
        </DropdownMenu>
      ) : (
        ""
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
