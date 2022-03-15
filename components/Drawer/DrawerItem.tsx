import { useState } from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import { a, useSpring } from "react-spring";
import useMeasure from "react-use-measure";
import {
  DrawerItemContainer,
  DrawerItemContent,
  DrawerItemInner,
  DrawerHeader,
} from "./Drawer.styled";

interface DrawerItemProps {
  title: string;
  children: any;
}

const DrawerItem = ({ title, children }: DrawerItemProps) => {
  const togglePanel = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [ref, bounds] = useMeasure();

  const chevronAnimation = useSpring({
    transform: isCollapsed ? "rotate(0deg)" : "rotate(180deg)",
  });

  const panelAnimation = useSpring({
    height: isCollapsed ? 0 : bounds.height,
  });

  return (
    <DrawerItemContainer>
      <DrawerHeader onClick={togglePanel}>
        <span>{title}</span>
        <a.div style={chevronAnimation}>
          <FaChevronCircleDown color="grey" />
        </a.div>
      </DrawerHeader>
      <DrawerItemContent>
        <a.div style={panelAnimation}>
          <DrawerItemInner ref={ref}> {children}</DrawerItemInner>
        </a.div>
      </DrawerItemContent>
    </DrawerItemContainer>
  );
};

export default DrawerItem;
