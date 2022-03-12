import styled from "styled-components";
import {
  SearchBox,
  SearchContainer,
  SearchIcon,
} from "./Fields/SearchBox.styled";
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import SearchContext from "../context/searchContext";

const Container = styled.div`
  background: linear-gradient(45deg, #0f202d, #09141c);
  width: 90vw;
  height: 3rem;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  padding: 0.5rem;
  position: fixed;
  top: 0.2em;
  z-index: 10;
`;

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
