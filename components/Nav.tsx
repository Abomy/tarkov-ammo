import styled from "styled-components";
import {
  SearchBox,
  SearchContainer,
  SearchIcon,
} from "./Fields/SearchBox.styled";
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import SearchContext from "../context/searchContext";

const Container = styled.div``;

const Nav = () => {
  const { query, onQueryChange } = useContext(SearchContext);
  return (
    <Container>
      <SearchContainer>
        <SearchBox
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />

        <SearchIcon>
          <FaSearch color="grey" />
        </SearchIcon>
      </SearchContainer>
    </Container>
  );
};

export default Nav;
