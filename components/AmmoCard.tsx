import React, { useState } from "react";
import styled from "styled-components";
import { Ammo, Ballistics } from "../interfaces/ammo";
import Card from "./Card/Card";
import {
  TitleContainer,
  Image,
  Title,
  InfoTitle,
  InfoContainer,
  InfoRow,
} from "./Card/Card.styled";
import { Spacer } from "./Spacer.styled";
import Trade, { Traders } from "./Trade";

interface Props {
  data: Ammo;
}

const AmmoCard = ({ data }: Props) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  if (flipped) {
    return (
      <div onClick={handleClick}>
        <Card>
          <TitleContainer>
            <Image src={data.image} alt="item image" />
            <Title>{data.name}</Title>
          </TitleContainer>
          <InfoContainer>
            <InfoTitle>Basllistics </InfoTitle>
            {data.ballistics && listBallistics(data.ballistics)}
            <Traders>
              {data.trades.map((trade) => {
                return <Trade key={data.id + trade.source} data={trade} />;
              })}
            </Traders>
          </InfoContainer>
        </Card>
      </div>
    );
  }

  return (
    <div onClick={handleClick}>
      <Card>
        <TitleContainer>
          <Image src={data.image} alt="item image" />
          <Title>{data.name}</Title>
        </TitleContainer>
        <InfoContainer>
          <InfoTitle>Info </InfoTitle>
          <InfoRow>{data.caliber && "Caliber: " + data.caliber}</InfoRow>
          <InfoRow>
            Tracer:
            {data.tracer ? " True" : " False"}{" "}
            {data.tracer && `(${data.tracerColor})`}
          </InfoRow>
          <InfoRow>Stack Size: {data.stackMaxSize}</InfoRow>

          <Traders>
            {data.trades.map((trade) => {
              return <Trade key={data.id + trade.source} data={trade} />;
            })}
          </Traders>
        </InfoContainer>
      </Card>
    </div>
  );
};

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
function useSpring(arg0: {
  opacity: number;
  transform: string;
  config: { mass: number; tension: number; friction: number };
}): { transform: any; opacity: any } {
  throw new Error("Function not implemented.");
}
