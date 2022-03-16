import { createContext } from "react";

export interface SearchInterface {
  query: string;
  filters: string[];
  onQueryChange: (value: string) => void;
  onFiltersChange: (value: string[]) => void;
}
const SearchContext = createContext({
  query: "",
  filters: Array<string>(),
  onQueryChange: (value: string) => {},
  onFiltersChange: (value: string[]) => {},
});
export default SearchContext;
