import styled from "styled-components";
import {
  SearchBox,
  SearchContainer,
  SearchIcon,
} from "../Fields/SearchBox.styled";
import { FaSearch } from "react-icons/fa";
import { useContext, useState } from "react";
import SearchContext from "../../context/searchContext";
import { MenuContainer, MenuIcon, NavContainer, NavTtitle } from "./Nav.styled";
import Drawer from "../Drawer/Drawer";

const Nav = () => {
  const { query, onQueryChange } = useContext(SearchContext);

  const [isDrawerShowing, setDrawerShowing] = useState(false);

  const handleToggleDrawer = () => {
    setDrawerShowing(!isDrawerShowing);
  };

  return (
    <>
      <NavContainer>
        <MenuContainer>
          <MenuIcon onClick={handleToggleDrawer} />
        </MenuContainer>
        <NavTtitle>Tarkov Ammo</NavTtitle>
        <Drawer
          show={isDrawerShowing}
          handler={handleToggleDrawer}
          search={onQueryChange}
          query={query}
        />
      </NavContainer>
    </>
  );
};

export default Nav;

{
  /* <SearchContainer>
<SearchBox
  value={query}
  onChange={(e) => onQueryChange(e.target.value)}
/>

<SearchIcon>
  <FaSearch color="grey" />
</SearchIcon>
</SearchContainer> */
}
