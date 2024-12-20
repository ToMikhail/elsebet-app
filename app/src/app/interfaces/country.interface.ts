import { League } from "./leagues.interface";

export interface Country {
  country: string;
  leagues?: League[];
}
