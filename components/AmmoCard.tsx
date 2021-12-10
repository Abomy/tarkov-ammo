import React from "react";
import styled from "styled-components";
import { Ammo, Ballistics } from "../interfaces/ammo";
import Card, { TitleContainer, Image, Title } from "./Card/Card.styled";
import { Spacer } from "./Spacer.styled";
import Trade, { Traders } from "./Trade";

const InfoContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;
const InfoRow = styled.div`
  color: #fff;
`;

interface Props {
  data: Ammo;
}
const AmmoCard = ({ data }: Props) => (
  <Card>
    <TitleContainer>
      <Image src={data.image} alt="item image" />
      <Title>{data.name}</Title>
    </TitleContainer>
    <Spacer />
    <InfoContainer>
      <InfoRow>
        {data.caliber && "Caliber:" + data.caliber.split("Caliber").join(" ")}
      </InfoRow>
      <InfoRow>
        Tracer:
        {data.tracer ? " True" : " False"}{" "}
        {data.tracer && `(${data.tracerColor})`}
      </InfoRow>
      <InfoRow>Stack Size: {data.stackMaxSize}</InfoRow>
      <InfoRow>
        Weight: {data.weight} ({(data.weight * data.stackMaxSize).toFixed(2)})
      </InfoRow>

      {data.ballistics && listBallistics(data.ballistics)}
    </InfoContainer>
    <Spacer />
    <Traders>
      {data.trades.map((trade) => {
        return <Trade key={data.id + trade.source} data={trade} />;
      })}
    </Traders>
  </Card>
);

function listBallistics(ballistics: Ballistics) {
  return (
    <>
      {ballistics.damage && <InfoRow>Damage: {ballistics.damage}</InfoRow>}
      {ballistics.armorDamage && (
        <InfoRow>Armour Damage: {ballistics.armorDamage}</InfoRow>
      )}
      {ballistics.fragmentationChance > -1 && (
        <InfoRow>Frag Chance: {ballistics.fragmentationChance}</InfoRow>
      )}
      {ballistics.penetrationChance > -1 && (
        <InfoRow>Pen Chance: {ballistics.penetrationChance}</InfoRow>
      )}
      {ballistics.penetrationPower > -1 && (
        <InfoRow>Pen Power: {ballistics.penetrationPower}</InfoRow>
      )}
      {ballistics.ricochetChance > -1 && (
        <InfoRow>Ricochet: {ballistics.ricochetChance}</InfoRow>
      )}
      {ballistics.accuracy > -1 && (
        <InfoRow>Accuracy: {ballistics.accuracy}</InfoRow>
      )}
      {ballistics.recoil > -1 && <InfoRow>Recoil: {ballistics.recoil}</InfoRow>}
      {ballistics.initialSpeed && (
        <InfoRow>Initial Speed: {ballistics.initialSpeed}</InfoRow>
      )}
    </>
  );
}

export default AmmoCard;
