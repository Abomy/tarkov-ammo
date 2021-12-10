import type { NextPage } from "next";
import { Ammo } from "../interfaces/ammo";
import AmmoList from "../public/ammo.json";
import Image from "next/image";
import Card from "../components/Card/Card.styled";
import AmmoCard from "../components/AmmoCard";

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

export default function Home({ Ammo }: AmmoProps) {
  Ammo = Ammo.filter((ammo) => ammo.trades.length != 0);
  return (
    <div className="cards">
      {Ammo?.map((item) => {
        return <AmmoCard key={item.id} data={item} />;
      })}
    </div>
  );
}
