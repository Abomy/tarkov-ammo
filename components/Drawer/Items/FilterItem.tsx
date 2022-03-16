import { useState } from "react";
import {
  FilterDropDownContainer,
  FilterItemContainer,
} from "./FilterItem.styled";
import FilterItemRow from "./FilterItemRow";

interface DropDownProps {
  items?: string[];
  callback?: () => {};
}
const FilterDropDown = ({ items, callback }: DropDownProps) => {
  return (
    <FilterDropDownContainer>
      {items ? (
        items?.map((item) => {
          return <FilterItemRow key={item + "-row"} text={item} />;
        })
      ) : (
        <FilterItemContainer>No items :(</FilterItemContainer>
      )}
    </FilterDropDownContainer>
  );
};

export default FilterDropDown;
