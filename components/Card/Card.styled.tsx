import styled from "styled-components";

export const StyledContainer = styled.div`
  user-select: none;
  position: relative;
  background-color: #313131;
  border-radius: 10px;
  min-height: 360px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  opacity: 0.95;
`;

export const Title = styled.div`
  color: white;
  margin-left: 0.3em;
  width: 100%;
  display: flex;
  justify-content: left;
  text-shadow: 1px 1px black;
  align-items: center;
  font-weight: 700;
  word-break: break-word;
`;

export const TitleContainer = styled.div`
  padding: 0.4em;
  display: flex;
  background-color: #494848;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 10px 10px 0px 0px;
`;

export const Image = styled.img`
  border-radius: 5px;
  border: 2px solid #5f5f5f;
`;

export const InfoContainer = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;
  display: flex;
  will-change: transform, opacity;

  flex-direction: column;
  padding: 18px;
`;

export const InfoTitle = styled.div`
  padding-top: 1em;
  padding-bottom: 0.3em;
  text-align: left;
  margin: 0 auto;
  font-weight: 700;
`;
export const InfoRow = styled.div`
  color: #fff;
`;

export const InfoTabContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const InfoTabSelection = styled.div`
  position: relative;
  height: 4px;
  width: 80%;
  margin: 0 auto;
  border: 3px solid grey;
  border-radius: 25px;
`;
export const InfoTabSelected = styled(InfoTabSelection)`
  position: absolute;
  border: 3px solid black;
  width: 50%;
  top: -3px;
  left: -3px;
  opacity: 0.8;
`;
