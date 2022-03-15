import { createContext } from "react";

const SearchContext = createContext({
  query: "",
  filters: [],
  onQueryChange: (value: string) => {},
});
export default SearchContext;
