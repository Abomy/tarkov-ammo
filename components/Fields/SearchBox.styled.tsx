import styled from "styled-components";

export const SearchContainer = styled.div`
  align-self: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
`;

export const SearchBoxLabel = styled.label`
  font-size: 0.8em;
  padding-bottom: 3px;
  padding-left: 0.4em;
`;

export const SearchBoxContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  height: 1em;
`;
export const SearchBoxInput = styled.input`
  padding-right: 0px;
  height: 2em;
  font-size: 0.6em;
  padding-left: 0.5em;
  width: 100%;
  border-radius: 15px;
  color: white;
  background-color: transparent;
  border: solid 2px #98989858;
`;

export const SearchIcon = styled.div`
  position: absolute;
  right: 0.01em;
  top: 1px;
  right: 3px;
  padding-left: 0.2em;
  transform: scale(0.7);
`;
