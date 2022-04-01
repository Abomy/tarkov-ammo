import { DrawerTreeContainer } from "./DrawerTree.styled";

interface DrawerTreeProps {
  title: string;
  items: string[];
}

const DrawerTree = ({ title, items }: DrawerTreeProps) => {
  return <DrawerTreeContainer />;
};

export default DrawerTree;
