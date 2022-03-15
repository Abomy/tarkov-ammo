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
      shortName
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
        name: item.shortName,
        image: item.gridImageLink,
        type: getType(item.name),
      });
    });
    fs.writeFile("./public/weapons.json", JSON.stringify(weapons, null, 2));
    res.status(200).json("Done");
  });
}

function getType(name: string): string {
  const weaponTypes = [
    "Pistol",
    "Carbine",
    "Assault Rifle",
    "Sniper",
    "Shotgun",
    "Submachine",
  ];
  console.log(name);

  let ret = "Undefined";

  weaponTypes.forEach((weaponType) => {
    if (name.toLowerCase().includes(weaponType.toLowerCase())) {
      ret = weaponType;
    }
  });
  return ret;
}
