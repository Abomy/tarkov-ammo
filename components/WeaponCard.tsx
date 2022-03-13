import React from "react";
import styled from "styled-components";
import { Weapon } from "../interfaces/weapon";
import Card from "./Card/Card";
import { Image } from "./Card/Card.styled";

const InfoContainer = styled.div``;
const InfoRow = styled.div``;

interface Props {
  data: Weapon;
}
const WeaponCard = ({ data }: Props) => (
  <Card>
    <InfoRow>{data.name} </InfoRow>
    <Image src={data.image} alt="item image" />
  </Card>
);

export default WeaponCard;
