import { Ammo } from "../interfaces/ammo";
import AmmoList from "../public/ammo.json";
import AmmoCard from "../components/AmmoCard";
import { useContext, useState } from "react";
import SearchContext from "../context/searchContext";

interface AmmoProps {
  Ammo: Ammo[];
}

export async function getStaticProps() {
  return {
    props: {
      Ammo: AmmoList,
    },
  };
}

const ammoFilter = ["bullet", "buckshot"];
export default function Home({ Ammo }: AmmoProps) {
  const search = useContext(SearchContext);
  ///remove ammo that doesnt have a seller
  Ammo = Ammo.filter(
    (ammo) => ammo.trades.length != 0 && ammoFilter.includes(ammo.ammoType)
  );
  Ammo = Ammo.sort((a, b) => (a.caliber > b.caliber ? 1 : -1));

  Ammo = filterBySearch(search.query, Ammo);

  return (
    <div className="cards">
      {Ammo?.map((item) => {
        return <AmmoCard key={item.id} data={item} />;
      })}
    </div>
  );
}

function filterBySearch(query: string, ammo: Ammo[]): Ammo[] {
  if (query != "") {
    query = query.toLowerCase();
    ammo = ammo.filter((bullet) => bullet.name.toLowerCase().includes(query));
  }

  return ammo;
}
