import { Ammo } from "../interfaces/ammo";
import AmmoList from "../public/ammo.json";
import WeaponList from "../public/weapons.json";
import AmmoCard from "../components/AmmoCard";
import { useContext, useState } from "react";
import SearchContext, { SearchInterface } from "../context/searchContext";
import WeaponCard from "../components/WeaponCard";
import { Weapon } from "../interfaces/weapon";

interface AmmoProps {
  Ammo: Ammo[];
  Weapons: Weapon[];
}

const ammoFilter = ["bullet", "buckshot"];
export async function getStaticProps() {
  const ammo = AmmoList as Ammo[];
  const filterAmmo = ammo
    .filter(
      (ammo) => ammo.trades.length != 0 && ammoFilter.includes(ammo.ammoType)
    )
    .sort((a, b) => (a.caliber > b.caliber ? 1 : -1));
  return {
    props: {
      Ammo: filterAmmo,
      Weapons: WeaponList.filter((item) => item.image != null),
    },
  };
}

export default function Home({ Ammo, Weapons }: AmmoProps) {
  const search = useContext(SearchContext);

  const filteredAmmo = filterItems(search, Ammo);

  return (
    <>
      {/* <div className="cards">
        {Weapons.map((item) => {
          return <WeaponCard key={item.id} data={item} />;
        })}
      </div> */}
      <div className="cards">
        {filteredAmmo.map((item) => {
          return <AmmoCard key={item.id} data={item} />;
        })}
      </div>
    </>
  );
}

function filterItems(search: SearchInterface, ammo: Ammo[]): Ammo[] {
  const { query, filters } = search;

  if (filters.length > 0) {
    ammo = ammo.reduce((previousAmmo, ammo) => {
      if (filters.includes(ammo.caliber)) return [...previousAmmo, ammo];
      return previousAmmo;
    }, new Array<Ammo>());
  }
  if (query != "") {
    const lower = query.toLowerCase();
    ammo = ammo.filter((bullet) => bullet.name.toLowerCase().includes(lower));
  }

  return ammo;
}
