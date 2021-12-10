import React from "react";
import { Ammo } from "../interfaces/ammo";
import Card, {
  TitleContainer,
  Image,
  Title,
  Date,
  Description,
} from "./Card/Card.styled";
import Trade, { Traders } from "./Trade";

interface Props {
  data: Ammo;
}
const AmmoCard = ({ data }: Props) => (
  <Card>
    <TitleContainer>
      <Image src={data.image} alt="item image" />
      <Title>{data.name}</Title>
    </TitleContainer>
    {/* show item info ballistics ect*/}
    <Traders>
      {data.trades.map((trade) => {
        return <Trade key={data.id + trade.source} data={trade} />;
      })}
    </Traders>
  </Card>
);

export default AmmoCard;
