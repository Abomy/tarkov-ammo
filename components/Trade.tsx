import styled from "styled-components";
import { Trade } from "../interfaces/ammo";
import Image from "next/image";

export const Traders = styled.div`
  right: 0px;
  display: flex;
  justify-content: end;
`;

const ToolTip = styled.span`
  opacity: 0;
  width: 60px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  top: 100%;
  left: 50%;
  margin-left: -30px;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;

  transition: opacity 300ms;
`;

const Trader = styled.div`
  color: #fff;
  margin-top: 0.5rem;
  text-transform: capitalize;
`;

const Container = styled.div`
  position: relative;
  display: inline-block;
  padding-left: 0.5rem;
  &:hover {
    ${ToolTip} {
      opacity: 1;
    }
  }
`;
const TextContainer = styled(Container)`
  flex-direction: column;
  padding-left: 0.8rem;
`;

const StyledImage = styled(Image)`
  border-radius: 50px;
`;
interface Props {
  data: Trade;
}

const romans = ["I", "II", "III", "IV"];
const currency = ["₽", "$"];

const Trade = ({ data }: Props) => {
  const level =
    data.requirements.find((requirement) => requirement.type === "loyaltyLevel")
      ?.value || 0;

  return (
    <Trader>
      <Container>
        <StyledImage
          src={`/static/images/${data.source}.png`}
          alt="me"
          width="42"
          height="42"
        />
        {level}
        <ToolTip>
          {data.price}
          {currency[data.currency]}
        </ToolTip>
      </Container>
    </Trader>
  );
};

export default Trade;
