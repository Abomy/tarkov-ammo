import { useContext } from "react";
import SearchContext from "../context/searchContext";

const UpdateFilters = (value: string, remove: boolean) => {
  const { filters, onFiltersChange } = useContext(SearchContext);
  if (remove && filters.includes(value)) {
    onFiltersChange(
      filters.filter((item) => {
        return item === value;
      })
    );
  } else {
    if (!filters.includes(value)) {
      onFiltersChange([...filters, value]);
    }
  }
};

export const AddFilter = (value: string) => {
  const { filters, onFiltersChange } = useContext(SearchContext);
  if (!filters.includes(value)) {
    onFiltersChange([...filters, value]);
  }
};

export const RemoveFilter = (value: string) => {
  UpdateFilters(value, true);
};
