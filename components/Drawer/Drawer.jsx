import * as React from "react";
import { useSpring, animated } from "react-spring";
import { useOutsideAlerter } from "../../events/OutsideAlert";
import SearchBox from "../Fields/SearchBox";
import { SearchBoxLabel, SearchContainer } from "../Fields/SearchBox.styled";
import { DrawerCard, DrawerContainer } from "./Drawer.styled";
import DrawerItem from "./DrawerItem";

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
          <DrawerItem title="Test">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </DrawerItem>
          <DrawerItem title="Test" />
          <DrawerItem title="Test" />
          <DrawerItem title="Test" />
          <DrawerItem title="Test" />
        </DrawerContainer>
      </DrawerCard>
    </animated.div>
  );
};

export default Drawer;
