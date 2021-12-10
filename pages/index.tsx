import type { NextPage } from "next";
import { Ammo } from "../interfaces/ammo";
import AmmoList from "../public/ammo.json";
import Image from "next/image";

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
  return (
    <div className="cards">
      {Ammo?.map((item) => {
        return (
          <div key={item.id} className="card">
            <span>
              <h3>{item.name}</h3>{" "}
              {item.image && (
                <img
                  src={item.image}
                  width="64px"
                  height="64px"
                  alt="No Img D:"
                />
              )}
            </span>
            {item.trades?.map((trade) => {
              return (
                <div key={item.id + trade.source}>
                  <div>
                    {trade.source} ({trade.requirements[0].value || "N/a"})
                  </div>
                  <div>Price: {trade.price}</div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
