import type { NextApiRequest, NextApiResponse } from "next";
import { request, gql } from "graphql-request";
import { Weapon } from "../../interfaces/weapon";
import { ItemsByType } from "../../interfaces/ammoRequest";
var fs = require("fs");

const query = gql`
  {
    itemsByType(type: gun) {
      id
      name
      gridImageLink
    }
  }
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  await request("https://tarkov-tools.com/graphql", query).then((data) => {
    const weapons = [] as Weapon[];
    data.itemsByType.map((item: ItemsByType) => {
      weapons.push({
        id: item.id,
        name: item.name,
        image: item.gridImageLink,
      });
    });
    fs.writeFile("./public/weapons.json", JSON.stringify(weapons, null, 2));
    res.status(200).json("Done");
  });
}
