import { Ammo } from "../interfaces/ammo";
import AmmoList from "../public/ammo.json";
import AmmoCard from "../components/AmmoCard";
import { useContext, useState } from "react";
import SearchContext from "../context/searchContext";

interface AmmoProps {
  Ammo: Ammo[];
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
    },
  };
}

export default function Home({ Ammo }: AmmoProps) {
  const search = useContext(SearchContext);

  const filteredAmmo = filterBySearch(search.query, Ammo);

  return (
    <div className="cards">
      {filteredAmmo.map((item) => {
        return <AmmoCard key={item.id} data={item} />;
      })}
    </div>
  );
}

function filterBySearch(query: string, ammo: Ammo[]): Ammo[] {
  if (query != "") {
    const lower = query.toLowerCase();
    return ammo.filter((bullet) => bullet.name.toLowerCase().includes(lower));
  }

  return ammo;
}
