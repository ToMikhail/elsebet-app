import { LeagueTable } from "./league-table.interface";

export interface League {
  country: string;
  league: string;
  season: string;
  signLink?: string;
  standings: LeagueTable[]
  }
