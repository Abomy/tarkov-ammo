import React from "react";
import { StyledContainer } from "./Card.styled";

interface CardProps {
  children: any;
}

const Card = ({ children }: CardProps) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Card;
