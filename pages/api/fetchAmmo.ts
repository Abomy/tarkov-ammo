import type { NextApiRequest, NextApiResponse } from "next";
import { request, gql } from "graphql-request";
import { Ammo } from "../../interfaces/ammo";
import { ItemsByType } from "../../interfaces/ammoRequest";
const fetch = require("node-fetch");
var fs = require("fs");

//Only traders of use
const traders = ["prapor", "mechanic", "skier", "jaeger"];

const ballisticsFile = "./public/ballistics.json";
const ballisticsInfo = JSON.parse(fs.readFileSync(ballisticsFile));
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
  await fetchBallistics();

  await request("https://tarkov-tools.com/graphql", query).then((data) => {
    var ammo = [] as Ammo[];

    data.itemsByType.map((item: ItemsByType) => {
      ammo.push({
        id: item.id,
        name: item.name,
        image: item.gridImageLink,
        ...ballisticsInfo[item.id],
        trades: item.buyFor?.filter((trade) => {
          return traders.includes(trade.source);
        }),
      });
    });

    fs.writeFile("./public/ammo.json", JSON.stringify(ammo, null, 2));
    res.status(200).json("Done");
  });
}

async function fetchBallistics() {
  var res = await fetch(ballisticsUrl);
  var ballistics = await res.json();

  if (ballistics)
    fs.writeFile(ballisticsFile, JSON.stringify(ballistics, null, 2));
}
