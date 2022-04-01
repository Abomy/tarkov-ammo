import { Trade as TradeObject } from "../../interfaces/ammo";
import Trade, { Traders } from "./Trade";

interface CardTradersProps {
  trades: TradeObject[];
  children?: React.FC;
}

const CardTraders = ({ trades, children }: CardTradersProps) => {
  return (
    <Traders>
      {trades.map((trade) => {
        return <Trade key={trade.source} data={trade} />;
      })}
      {children}
    </Traders>
  );
};

export default CardTraders;
