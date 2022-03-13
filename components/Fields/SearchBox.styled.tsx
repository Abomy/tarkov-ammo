import styled from "styled-components";

export const SearchContainer = styled.div`
  display: inline;
  width: 100%;
  position: relative;
  @media (min-width: 600px) {
    width: 50%;
  }
`;
export const SearchBox = styled.input`
  border: 1px solid rgb(255, 255, 255, 0.4);
  border-radius: 50px;
  height: 100%;
  width: 100%;
  background: #123149;
  padding-left: 15px;
  color: #fff;
  outline: none;
  :focus {
    border: 1px solid rgb(255, 255, 255, 1);
  }
  @media (min-width: 600px) {
    width: 50%;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 10px;
`;
