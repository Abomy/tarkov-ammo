import type { NextApiRequest, NextApiResponse } from "next";
import { request, gql } from "graphql-request";
import { Ammo, Trade } from "../../interfaces/ammo";
import { ItemsByType } from "../../interfaces/ammoRequest";
const fetch = require("node-fetch");
var fs = require("fs");

//Only traders of use
const traders = ["prapor", "mechanic", "skier", "jaeger", "peacekeeper"];
const caliberAlias = {
  ".338": [".338 Lapua Magnum"],
  ".300": [".300 AAC Blackout"],
  ".366": [".366 TKM"],
  ".45 ACP": [
    ".45 ACP FMJ",
    ".45 ACP Hydra-Shok",
    ".45 ACP Match",
    ".45 ACP  FMJ",
  ],
  "12/70": [
    "12/70  Buckshot",
    "12/70  buckshot",
    "12/70 Custom Lite Slug",
    "12/70  Custom Lite Slug",
    "12/70 Slug",
    "12/70  Slug",
    '12/70 "" Slug',
    "12/70 Dual Sabot Slug",
    "12/70 Copper Sabot Premier HP Slug",
    "12/70 8.5mm  buckshot",
    "12/70 6.5mm  buckshot",
    "12/70 SuperFormance HP Slug",
    "12/70 makeshift  slug",
    "12/70 Lead slug",
  ],
  "20/70": ["20/70  Buckshot", "20/70 Slug", '20/70 "" slug', "20/70 Star"],
  "23x75mm": [
    '23x75mm "" flashbang round',
    '23x75mm "" slug',
    '23x75mm "Shrapnel-10" buckshot',
    '23x75mm "Shrapnel-25" buckshot',
  ],
  "5.56x45mm": [
    "5.56x45mm MK 255 Mod 0 ()",
    "5.56x45mm MK 318 Mod 0 ()",
    "5.56x45mm ddon",
  ],
  "7.62x25": ["7.62x25mm TT"],
  "7.62x39mm": ["7.62x39mm gzh"],
  "7.62x51mm": ["7.62x51mm Tracer", "7.62x51mm Tracer"],
  "7.62x54mm": ["7.62x54mm R", "7.62x54mm R gzh", "7.62x54mm R gs"],
  "9x18mm": [
    "9x18mm PM",
    "9x18mm PMM",
    "9x18mm M P gzh",
    "9x18mm PM gs",
    "9x18mm PM gzh",
    "9x18mm PM PS gs PPO",
    "9x18mm PMM gzh",
  ],
  "9x19mm": ["9x19mm gzh"],
  "9x21mm": ["9x21mm gzh"],
  "9x39mm": ["9x39mm gs"],
} as { [key: string]: string[] };

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
      const dirtyCaliber = item.name.replace(item.shortName, "").trimEnd();
      const cleanCaliber = findCleanCaliber(dirtyCaliber);
      return {
        ...item,
        // caliber: item.caliber?.split("Caliber")[1] || "",
        tracerColor: item.tracer ? item.tracerColor.replace("tracer", "") : "",
        caliber: cleanCaliber,
      };
    });

    fs.writeFile(
      "./public/ammo.json",
      JSON.stringify(removeDuplicateTrades(fixedAmmo), null, 2)
    );
    res.status(200).json("Done");
  });
}
function findCleanCaliber(dirty: string): string {
  for (const key in caliberAlias) {
    if (
      Object.prototype.hasOwnProperty.call(caliberAlias, key) &&
      dirty.toLowerCase().includes(key.toLowerCase())
    ) {
      return key;
    }
  }
  return dirty;
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
