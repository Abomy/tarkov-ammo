import { useContext, useState } from "react";
import { FaCheck } from "react-icons/fa";
import SearchContext from "../../../context/searchContext";
import { getCaliberArray } from "../../../processors/Filters";
import { FilterItemCheck, FilterItemContainer } from "./FilterItem.styled";

interface FilterItemRowProps {
  text: string;
}

const FilterItemRow = ({ text }: FilterItemRowProps) => {
  const [selected, onFilterSelected] = useState(false);
  const { filters, onFiltersChange } = useContext(SearchContext);

  const handleClick = () => {
    //Cant filter via weapon atm
    // let filter = text;
    // if (!getCaliberArray().includes(text)) {
    // }

    if (selected && filters.includes(text)) {
      onFiltersChange(
        filters.filter((item) => {
          return item != text;
        })
      );

      onFilterSelected(false);
    } else {
      if (!filters.includes(text)) {
        onFiltersChange([...filters, text]);
      }
      onFilterSelected(true);
    }
  };

  return (
    <FilterItemContainer onClick={handleClick} key={text}>
      {text}
      {selected && (
        <FilterItemCheck>
          <FaCheck color="grey" />
        </FilterItemCheck>
      )}
    </FilterItemContainer>
  );
};

export default FilterItemRow;
