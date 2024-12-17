import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockLeaguesService {
  private _mockLeaguesUrl: string = '../../assets/mocks/leagues.json';

  constructor(private http: HttpClient) {}

  public getLeagues(): any {
    return this.http.get(this._mockLeaguesUrl);
  }
}


