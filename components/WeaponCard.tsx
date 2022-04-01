import React from "react";
import { Weapon } from "../interfaces/weapon";
import Card from "./Card/Card";
import { Image, Title, TitleContainer } from "./Card/Card.styled";
interface Props {
  data: Weapon;
}
const WeaponCard = ({ data }: Props) => (
  <Card>
    <TitleContainer>
      <Title>{data.name}</Title>
    </TitleContainer>
    <Image src={data.image} alt="item image" />
  </Card>
);

export default WeaponCard;
