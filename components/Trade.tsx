import path from "path";
import styled from "styled-components";
import { Trade } from "../interfaces/ammo";
import Image from "next/image";

export const Traders = styled.div``;

const Trader = styled.div`
  color: #fff;
  margin-top: 0.5rem;
  text-transform: capitalize;
`;

const Container = styled.div`
  display: flex;
`;
const TextContainer = styled(Container)`
  flex-direction: column;
  padding-left: 0.8rem;
`;

const StyledImage = styled(Image)`
  border-radius: 50px;
`;

const Name = styled.div`
  font-weight: 600;
  width: fit-content;
  word-break: keep-all;
`;
const Price = styled.div``;

interface Props {
  data: Trade;
}

const Trade = ({ data }: Props) => (
  <Trader>
    <Container>
      <StyledImage
        src={`/static/images/${data.source}.png`}
        alt="me"
        width="42"
        height="42"
      />
      <TextContainer>
        <Name>
          {data.source} (
          {
            data.requirements.find(
              (requirement) => requirement.type === "loyaltyLevel"
            )?.value
          }
          )
        </Name>
        <Price>Price: {data.price}</Price>
      </TextContainer>
    </Container>
  </Trader>
);

export default Trade;
