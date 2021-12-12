import { createContext } from "react";

const SearchContext = createContext({
  query: "",
  onQueryChange: (value: string) => {},
});
export default SearchContext;
