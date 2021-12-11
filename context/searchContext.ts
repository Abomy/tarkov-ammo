import { createContext } from "react";

const SearchContext = createContext({
  query: "",
  setQuery: (value: string) => {},
});
export default SearchContext;
