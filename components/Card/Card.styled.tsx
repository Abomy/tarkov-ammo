import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  border-radius: 5px;
  border: 1px solid #989898;
  padding: 1rem;
  background: linear-gradient(45deg, #0f202d, #09141c);
  margin: 0.5rem 0.5rem 0rem 0rem;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  flex-grow: 4;
  display: flex;
  flex-direction: column;
  width: 90vw;
`;

const StyledContainerBack = styled.div`
  border-radius: 5px;
  border: 1px solid #989898;
  padding: 1rem;
  background: linear-gradient(45deg, #0f202d, #09141c);
  margin: 0.5rem 0.5rem 0rem 0rem;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  flex-grow: 4;
  display: flex;
  flex-direction: column;
  transition: all 0.5s;
  width: 90vw;
`;

export const Title = styled.div`
  text-align: center;
  color: #fff;
  font-weight: 600;
  padding-left: 0.8rem;
  font-size: 1.2rem;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;
export const InfoTitle = styled.div`
  text-align: left;
  text-decoration: underline;
  color: #fff;
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
`;

export const Image = styled.img`
  border: 1px solid #989898;
`;

interface CardProps {
  children: any;
}

const Card = ({ children }: CardProps) => (
  <StyledContainer>{children}</StyledContainer>
);
export const CardBack = ({ children }: CardProps) => (
  <StyledContainerBack>{children}</StyledContainerBack>
);

export default Card;
