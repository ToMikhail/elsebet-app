import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

interface ITeam {
  position: number;
  team: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goals_for: number;
  goals_against: number;
  goal_difference: number;
  points: number;
}

interface ILeague {
  league: string;
  season: string;
  standings: [ITeam];
}

@Injectable({
  providedIn: 'root',
})
export class MockLeagueService {
  // private _api: HttpClient = inject(HttpClient);

  constructor(private http: HttpClient) {}
  public getLeague(id: string): Observable<ILeague[]> {
    return this.http.get<ILeague[]>(`../../assets/mocks/${id}.json`);
    // return this._api.get<ILeague[]>(`../../assets/mocks/${id}.json`);
  }
}
