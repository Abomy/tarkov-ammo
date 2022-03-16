import { InfoContainer, InfoRow } from "./Card.styled";

interface CardContainerProps {
  rows: string[];
  children?: React.FC;
}

const CardContainer = ({ rows, children }: CardContainerProps) => {
  return (
    <>
      <InfoContainer>
        {rows.map((row, index) => {
          return <InfoRow key={index}>{row}</InfoRow>;
        })}
        {children}
      </InfoContainer>
    </>
  );
};

export default CardContainer;
