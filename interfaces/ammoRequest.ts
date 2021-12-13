import { Requirement } from "./ammo";

export interface AmmoRequest {
  data: Data;
}

export interface Data {
  itemsByType: ItemsByType[];
}

export interface ItemsByType {
  id: string;
  name: string;
  gridImageLink: string;
  buyFor?: BuyFor[];
}

export interface BuyFor {
  price: number;
  source: string;
  currency: string;
  requirements: Requirement[];
}
