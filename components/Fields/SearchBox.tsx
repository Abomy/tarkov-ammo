import { FaSearch } from "react-icons/fa";
import {
  SearchBoxContainer,
  SearchBoxInput,
  SearchIcon,
} from "./SearchBox.styled";

interface SearchBoxProps {
  callback: () => {};
}

const SearchBox = ({ callback }: SearchBoxProps) => (
  <SearchBoxContainer>
    <SearchBoxInput onChange={callback} />
    <SearchIcon>
      <FaSearch color="grey" />
    </SearchIcon>
  </SearchBoxContainer>
);

export default SearchBox;
