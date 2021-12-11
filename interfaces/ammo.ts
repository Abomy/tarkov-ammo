export interface Ammo {
  id: string;
  name: string;
  image?: string;
  trades: Trade[];
  shortName: string;
  weight: number;
  caliber: string;
  stackMaxSize: number;
  tracer: boolean;
  tracerColor: string;
  ammoType: string;
  projectileCount: number;
  ballistics: Ballistics;
}

export interface Ballistics {
  damage: number;
  armorDamage: number;
  fragmentationChance: number;
  ricochetChance: number;
  penetrationChance: number;
  penetrationPower: number;
  accuracy: number;
  recoil: number;
  initialSpeed: number;
}

export interface Requirement {
  type: string;
  value: number;
}

export interface Trade {
  price: number;
  source: string;
  currency: number;
  requirements: Requirement[];
}
