import styled from "styled-components";

export const NavContainer = styled.div`
  min-height: 5em;
  max-height: 5em;
  background-color: #494848;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
`;

export const NavGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`;
export const NavTtitle = styled.div`
  align-self: center;
  text-align: center;
  font-size: 2em;
  color: white;
  text-shadow: 1px 1px black;
  font-weight: 700;
  grid-column: 2/3;
`;
export const MenuContainer = styled.div`
  grid-column: 1/2;
  display: block;
  padding: 1em;
`;

export const MenuIcon = styled.div`
  width: 3em;
  height: 3em;
  background-image: url("./static/images/menu-icon.svg");
  background-size: contain;
  background-repeat: no-repeat;
  filter: invert(15%) sepia(0%) saturate(0%) hue-rotate(275deg) brightness(95%)
    contrast(85%);

  &:hover {
    filter: invert(5%) sepia(1%) saturate(5882%) hue-rotate(314deg)
      brightness(94%) contrast(55%);
  }
`;
