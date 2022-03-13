import * as React from "react";
import { FaSearch } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import { useOutsideAlerter } from "../../events/OutsideAlert";
import { SearchBox, SearchContainer, SearchIcon } from "../Fields/SearchBox.styled";
import { DrawerContainer, OnTop } from "./Drawer.styled";

const Drawer = ({ show, handler, search,query }) => {

const wrapperRef = React.useRef(null);
useOutsideAlerter(wrapperRef,show,handler);


  const props = useSpring({
    left: show ?  0 : -300,
    position: "absolute",
    top: 0,
    backgroundColor: "#806290",
    height: "100vh",
    width: "300px",
  });

  return (
    <animated.div style={props} ref={wrapperRef}>
      <DrawerContainer ><SearchContainer>
<SearchBox
  value={query}
  onChange={(e) => search(e.target.value)}
/>

<SearchIcon>
  <FaSearch color="grey" />
</SearchIcon>
</SearchContainer></DrawerContainer>
    </animated.div>
  );
};

export default Drawer;