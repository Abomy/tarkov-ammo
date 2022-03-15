import { WeaponFilter } from "../interfaces/weapon";
import AmmoList from "../public/ammo.json";
import WeaponsList from "../public/weapons.json";

const blacklist = ["grenade", "ammo pack", "patron"];

export const getWeaponArray = (type: string): string[] => {
  return WeaponsList.reduce((filteredWeapons, weapon) => {
    if (
      !filteredWeapons.includes(weapon.name) &&
      weapon.type.toLowerCase() === type.toLowerCase()
    ) {
      return [...filteredWeapons, weapon.name];
    }
    return filteredWeapons;
  }, new Array<string>());
};

export const getWeaponFilters = (): WeaponFilter[] => {
  return [
    { title: "Pistols", filterKey: "Pistol" },
    { title: "Submachine Guns", filterKey: "Submachine" },
    { title: "Assault Rifles", filterKey: "Assault Rifle" },
    { title: "Carbines", filterKey: "Carbine" },
    { title: "Sniper Rifles", filterKey: "Sniper" },
    { title: "Other", filterKey: "Undefined" },
  ];
};

const isBlacklisted = (name: string): boolean => {
  return blacklist.some((entry) => {
    return name.toLowerCase().includes(entry.toLowerCase());
  });
};
export const getCaliberArray = (): string[] => {
  return AmmoList.reduce((filterCaliber, ammo) => {
    if (filterCaliber.includes(ammo.caliber) || isBlacklisted(ammo.caliber)) {
      return filterCaliber;
    }
    return [...filterCaliber, ammo.caliber];
  }, new Array<string>()).sort();
};
