import { useContext, useEffect, useState } from "react";
import { a, useSpring } from "react-spring";
import useMeasure from "react-use-measure";
import SearchContext from "../../context/searchContext";
import { FilterDisplayContainer } from "./FilterDisplay";

const FilterDisplay = () => {
  const { filters, query } = useContext(SearchContext);

  let filterString = "";
  if (query.length > 0) {
    filterString += `"${query}", `;
  }
  if (filters.length > 0) {
    filters.forEach((filter) => {
      filterString += `${filter}, `;
    });
  }

  return (
    <FilterDisplayContainer>
      {filterString.length > 0 &&
        "Active Filters: " + filterString.trimEnd().replace(/^,+|,+$/g, "")}
    </FilterDisplayContainer>
  );
};

export default FilterDisplay;
