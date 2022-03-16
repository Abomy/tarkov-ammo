import { Ammo, Ballistics } from "../interfaces/ammo";

export const getAmmoInfo = (ammo: Ammo): string[] => {
  let info = Array<string>();

  if (ammo.caliber) info.push("Caliber: " + ammo.caliber);

  if (ammo.tracer) info.push(`Tracer: True (${ammo.tracerColor})`);
  else info.push("Tracer: False");

  info.push(`Stack Size: ${ammo.stackMaxSize}`);

  return info;
};

export const getAmmoBallistics = (ballistics: Ballistics): string[] => {
  let info = Array<string>();

  if (ballistics.damage) info.push(`Damage: ${ballistics.damage}`);

  if (ballistics.armorDamage)
    info.push(`Armour Damage: ${ballistics.armorDamage}`);

  if (ballistics.fragmentationChance > -1)
    info.push(`Frag Chance: ${ballistics.fragmentationChance}`);

  if (ballistics.penetrationChance > -1)
    info.push(`Pen Chance: ${ballistics.penetrationChance}`);

  if (ballistics.penetrationPower > -1)
    info.push(`Pen Power: ${ballistics.penetrationPower}`);

  if (ballistics.ricochetChance > -1)
    info.push(`Ricochet: ${ballistics.ricochetChance}`);

  if (ballistics.accuracy > -1) info.push(`Accuracy: ${ballistics.accuracy}`);

  if (ballistics.recoil > -1) info.push(`Recoil: ${ballistics.recoil}`);

  if (ballistics.initialSpeed > -1)
    info.push(`Initial Speed: ${ballistics.initialSpeed}`);

  return info;
};
