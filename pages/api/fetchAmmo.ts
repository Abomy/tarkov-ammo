import type { NextApiRequest, NextApiResponse } from "next";
import { request, gql } from "graphql-request";
import { Ammo, Trade } from "../../interfaces/ammo";
import { ItemsByType } from "../../interfaces/ammoRequest";
const fetch = require("node-fetch");
var fs = require("fs");

//Only traders of use
const traders = ["prapor", "mechanic", "skier", "jaeger", "peacekeeper"];

const ballisticsFile = "./public/ballistics.json";
const ballisticsUrl =
  "https://raw.githubusercontent.com/TarkovTracker/tarkovdata/master/ammunition.json";

const query = gql`
  {
    itemsByType(type: ammo) {
      id
      name
      gridImageLink
      buyFor {
        price
        source
        currency
        requirements {
          type
          value
        }
      }
    }
  }
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  var ballistics = await fetchBallistics();

  await request("https://tarkov-tools.com/graphql", query).then((data) => {
    const ammo = [] as Ammo[];

    data.itemsByType.map((item: ItemsByType) => {
      ammo.push({
        id: item.id,
        name: item.name,
        image: item.gridImageLink,
        ...ballistics[item.id],
        trades: item.buyFor
          ?.filter((trade) => {
            return traders.includes(trade.source);
          })
          .map((trade) => {
            return {
              price: trade.price,
              source: trade.source,
              currency: convertCurrency(trade.currency),
              requirements: trade.requirements,
            };
          }),
      });
    });

    const fixedAmmo = ammo.map((item: Ammo) => {
      return {
        ...item,
        caliber: item.caliber?.split("Caliber")[1] || "",
      };
    });

    fs.writeFile(
      "./public/ammo.json",
      JSON.stringify(removeDuplicateTrades(fixedAmmo), null, 2)
    );
    res.status(200).json("Done");
  });
}

function removeDuplicateTrades(Ammo: Ammo[]): Ammo[] {
  const newAmmoSet = Ammo.map((ammo) => {
    const trades = ammo.trades.reduce((prev, trader) => {
      const prevTrader = prev.find(
        (prevTrade) => prevTrade.source === trader.source
      );

      if (prevTrader) {
        const prevLevelReq = prevTrader.requirements.find(
          (req) => req.type === "loyaltyLevel"
        );
        const currLevelReq = trader.requirements.find(
          (req) => req.type === "loyaltyLevel"
        );
        // Somethings horribly wrong with data point skip!
        if (!prevLevelReq || !currLevelReq) {
          return prev;
        }

        if (prevLevelReq.value < currLevelReq.value) {
          return prev;
        }
        return [...prev.filter((item) => item.source != trader.source), trader];
      }

      return [...prev, trader];
    }, new Array<Trade>());

    return {
      ...ammo,
      trades,
    };
  });

  return newAmmoSet;
}

const currency = ["RUB", "USD"];
function convertCurrency(value: string): number {
  return currency.includes(value) ? currency.indexOf(value) : -1;
}
async function fetchBallistics() {
  const res = await fetch(ballisticsUrl);
  const ballistics = await res.json();

  if (ballistics) {
    fs.writeFile(ballisticsFile, JSON.stringify(ballistics, null, 2));
  } else {
    return JSON.parse(fs.readFileSync(ballisticsFile));
  }

  return ballistics;
}
