import { a, useSpring } from "react-spring";
import {
  TitleContainer,
  Title,
  InfoTabContainer,
  InfoTitle,
  Image,
  InfoTabSelection,
  InfoTabSelected,
} from "./Card.styled";

interface CardHeaderProps {
  title: string;
  image?: string;
  flipped: boolean;
}

const CardHeader = ({ title, image, flipped }: CardHeaderProps) => {
  const moveSelected = useSpring({
    transform: `translateX(${flipped ? 53 : 0}%)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <>
      <TitleContainer>
        <Image src={image} alt={title} />
        <Title>{title}</Title>
      </TitleContainer>
      <InfoTabContainer>
        <InfoTitle>Info </InfoTitle>
        <InfoTitle>Basllistics </InfoTitle>
      </InfoTabContainer>
      <InfoTabSelection>
        <a.div style={moveSelected}>
          <InfoTabSelected />
        </a.div>
      </InfoTabSelection>
    </>
  );
};

export default CardHeader;
