import {
  FilterDropDownContainer,
  FilterItemContainer,
} from "./FilterItem.styled";

interface DropDownProps {
  items?: string[];
  callback?: () => {};
}
const FilterDropDown = ({ items, callback }: DropDownProps) => {
  return (
    <FilterDropDownContainer>
      {items ? (
        items?.map((item) => {
          return <FilterItemContainer key={item}>{item}</FilterItemContainer>;
        })
      ) : (
        <FilterItemContainer>No items :(</FilterItemContainer>
      )}
    </FilterDropDownContainer>
  );
};

export default FilterDropDown;
