import * as React from "react";
import { useSpring, animated } from "react-spring";
import { useOutsideAlerter } from "../../events/OutsideAlert";
import SearchBox from "../Fields/SearchBox";
import { SearchBoxLabel, SearchContainer } from "../Fields/SearchBox.styled";
import { DrawerCard, DrawerContainer, DrawerLabel } from "./Drawer.styled";
import DrawerItem from "./DrawerItem";
import FilterItem from "./Items/FilterItem";

const Drawer = ({ show, handler, search, query }) => {
  const wrapperRef = React.useRef(null);
  useOutsideAlerter(wrapperRef, show, handler);

  const props = useSpring({
    left: show ? 0 : -300,
    position: "absolute",
    top: 0,
    height: "100vh",
    width: "300px",
  });

  return (
    <animated.div style={props} ref={wrapperRef}>
      <DrawerCard>
        <DrawerContainer>
          <SearchContainer>
            <SearchBoxLabel>Search</SearchBoxLabel>
            <SearchBox callback={(e) => search(e.target.value)} />
          </SearchContainer>
          <DrawerLabel>Filters</DrawerLabel>
          <DrawerItem title="Caliber">
            <FilterItem />
          </DrawerItem>
          <DrawerItem title="Weapon">
            <FilterItem />
          </DrawerItem>
        </DrawerContainer>
      </DrawerCard>
    </animated.div>
  );
};

export default Drawer;
