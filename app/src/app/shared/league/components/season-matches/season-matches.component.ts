import {
  Component,
  inject,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MockSeasonMatchesService } from '../../../../services/mock-season-matches.service';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-season-matches',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './season-matches.component.html',
  styleUrl: './season-matches.component.scss',
})
export class SeasonMatchesComponent implements OnInit {

  private readonly matchesService: MockSeasonMatchesService = inject(
    MockSeasonMatchesService
  );

  allTeams$ = toSignal(this.matchesService.getAllTeams());

  public allMatches$: Observable<any[]> =
    this.matchesService.getAllSeasonMatches();

  url: string =
    'url("https://upload.wikimedia.org/wikipedia/en/d/d6/Belarus_Premier_League_logo.png")';

    ngOnInit(): void {
    }

  public getLogos(): void {
    // console.log('say hello');
  }
  public getTeamLogo(teamName: any): any {
    let findTeam: any = this.allTeams$().find((team: any) => team.name === teamName)
    return `url("${findTeam.logo_link}")`;
  }
}
