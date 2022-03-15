import styled from "styled-components";

export const SearchContainer = styled.div`
  align-self: center;
  width: 95%;
  display: flex;
  flex-direction: column;
`;

export const SearchBoxLabel = styled.label`
  font-size: 0.7em;
  padding-bottom: 3px;
  padding-left: 0.4em;
`;

export const SearchBoxContainer = styled.div`
  width: 95%;
  position: relative;
  display: flex;
  height: 1em;
`;
export const SearchBoxInput = styled.input`
  font-size: 0.6em;
  padding-left: 0.5em;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  border: none;
`;

export const SearchIcon = styled.div`
  position: absolute;
  right: 0.01em;
  top: -2px;
  padding-left: 0.2em;
  transform: scale(0.6);
`;
