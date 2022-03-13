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
import { useSpring, a } from "@react-spring/web";

interface Props {
  data: Ammo;
}

const AmmoCard = ({ data }: Props) => {
  const [flipped, setFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div onClick={handleClick}>
      <Card>
        <TitleContainer>
          <Image src={data.image} alt="item image" />
          <Title>{data.name}</Title>
        </TitleContainer>

        <a.div style={{ opacity: opacity.to((o) => 1 - o), transform }}>
          <InfoContainer>
            <InfoTitle>Info </InfoTitle>
            <InfoRow>{data.caliber && "Caliber: " + data.caliber}</InfoRow>
            <InfoRow>
              Tracer:
              {data.tracer ? " True" : " False"}{" "}
              {data.tracer && `(${data.tracerColor})`}
            </InfoRow>
            <InfoRow>Stack Size: {data.stackMaxSize}</InfoRow>
          </InfoContainer>
        </a.div>

        <a.div
          style={{
            opacity,
            transform,
            rotateY: "180deg",
          }}
        >
          <InfoContainer>
            <InfoTitle>Basllistics </InfoTitle>
            {data.ballistics && listBallistics(data.ballistics)}
          </InfoContainer>
        </a.div>
        <Traders>
          {data.trades.map((trade) => {
            return <Trade key={data.id + trade.source} data={trade} />;
          })}
        </Traders>
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
