import styled from "styled-components";

export const DrawerCard = styled.div`
  justify-content: space-between;
  background-color: #313131;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 25px;
  padding: 10px;
  z-index: 100;
`;

export const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const OnTop = styled.div`
  z-index: 100;
`;

export const DrawerItemContainer = styled.div`
  margin-top: 0.5em;
  background-color: red;
`;
export const DrawerHeader = styled.div`
  background-color: red;
  color: #ffffff;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const DrawerItemIcon = styled.div``;

export const DrawerItemContent = styled.div`
  font-size: 0.5em;
  background-color: black;
  overflow: hidden;
`;

export const DrawerItemInner = styled.div`
  padding: 20px 5px;
`;
