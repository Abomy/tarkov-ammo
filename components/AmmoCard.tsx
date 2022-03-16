import React, { useState } from "react";
import { Ammo } from "../interfaces/ammo";
import Card from "./Card/Card";
import { useSpring, a } from "@react-spring/web";
import CardHeader from "./Card/CardHeader";
import CardContainer from "./Card/CardContainer";
import { getAmmoBallistics, getAmmoInfo } from "../processors/AmmoInfo";
import CardTraders from "./Card/CardTrader";

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
        <CardHeader title={data.name} image={data.image} flipped={flipped} />

        <a.div style={{ opacity: opacity.to((o) => 1 - o), transform }}>
          <CardContainer rows={getAmmoInfo(data)} />
        </a.div>

        <a.div
          style={{
            opacity,
            transform,
            rotateY: "180deg",
          }}
        >
          <CardContainer rows={getAmmoBallistics(data.ballistics)} />
        </a.div>
        <CardTraders trades={data.trades} />
      </Card>
    </div>
  );
};

export default AmmoCard;
