import React from "react";
import styled from "styled-components";
import { Weapon } from "../interfaces/weapon";
import Card, { Image } from "./Card/Card.styled";

const InfoContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;
const InfoRow = styled.div`
  color: #fff;
`;

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
