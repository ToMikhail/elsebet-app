import { League } from "./league.interface";

export interface Country {
  country: string;
  leagues?: League[];
}
