import { useContext, useState } from "react";
import SearchContext from "../../context/searchContext";
import {
  MenuContainer,
  MenuIcon,
  NavContainer,
  NavGrid,
  NavTtitle,
} from "./Nav.styled";
import Drawer from "../Drawer/Drawer";
import { FilterDisplayContainer } from "./FilterDisplay";
import FilterDisplay from "./FilteredDisplay.styled";

const Nav = () => {
  const { query, onQueryChange } = useContext(SearchContext);

  const [isDrawerShowing, setDrawerShowing] = useState(false);

  const handleToggleDrawer = () => {
    setDrawerShowing(!isDrawerShowing);
  };

  return (
    <NavContainer>
      <NavGrid>
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
      </NavGrid>
      <FilterDisplay />
    </NavContainer>
  );
};

export default Nav;
