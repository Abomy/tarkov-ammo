import { Ammo } from "../interfaces/ammo";
import AmmoList from "../public/ammo.json";
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

const ammoFilter = ["bullet", "buckshot"];
export default function Home({ Ammo }: AmmoProps) {
  ///remove ammo that doesnt have a seller
  Ammo = Ammo.filter(
    (ammo) => ammo.trades.length != 0 && ammoFilter.includes(ammo.ammoType)
  );
  Ammo = Ammo.sort((a, b) => (a.caliber > b.caliber ? 1 : -1));

  return (
    <div className="cards">
      {Ammo?.map((item) => {
        return <AmmoCard key={item.id} data={item} />;
      })}
    </div>
  );
}
