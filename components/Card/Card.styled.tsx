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
`;

export const Title = styled.h2`
  word-break: keep-all;
  color: #fff;
  font-weight: 300;
  padding-left: 0.8rem;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Date = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

export const Description = styled.p`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
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

export default Card;
