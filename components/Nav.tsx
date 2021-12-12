import styled from "styled-components";
import {
  SearchBox,
  SearchContainer,
  SearchIcon,
} from "./Fields/SearchBox.styled";
import { FaSearch } from "react-icons/fa";
import { useContext, useState } from "react";
import SearchContext from "../context/searchContext";

const Container = styled.div`
  background: linear-gradient(45deg, #0f202d, #09141c);
  height: 3rem;
  margin: 1rem;
  margin-right: 1.42rem;
  border-radius: 5px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  display: flex;
  padding: 0.5rem;
`;

const Nav = () => {
  const { query, setQuery } = useContext(SearchContext);
  return (
    <Container>
      <SearchContainer>
        <SearchBox value={query} onChange={(e) => setQuery(e.target.value)} />

        <SearchIcon>
          <FaSearch color="grey" />
        </SearchIcon>
      </SearchContainer>
    </Container>
  );
};

export default Nav;
