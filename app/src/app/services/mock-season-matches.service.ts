import { HttpClient } from '@angular/common/http';
import { Injectable, resource } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable, catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockSeasonMatchesService {
  private baseUrl: string = '../../assets/mocks/by1.2024.json';
  // private baseUrl: string = '../../assets/mocks/by1.json';
  // private baseUrl: string = `../../assets/mocks/${leagueName}.${seasonYear}.json`;

  constructor(private http: HttpClient) {}

  public getAllSeasonMatches(): Observable<any> {
    return this.http.get<any>(this.baseUrl).pipe(
      map((season: any) => {
        return season.matches;
      }),
      tap((response: any) => console.log('response:', response)),
      catchError((error): any => console.log('error:', error))
    );
  }
}
