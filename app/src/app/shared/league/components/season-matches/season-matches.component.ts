import {
  Component,
  inject,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MockSeasonMatchesService } from '../../../../services/mock-season-matches.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-season-matches',
  imports: [CommonModule, MatCardModule],
  templateUrl: './season-matches.component.html',
  styleUrl: './season-matches.component.scss',
})
export class SeasonMatchesComponent {
  private readonly matchesService: MockSeasonMatchesService = inject(
    MockSeasonMatchesService
  );

  public logo$: any = ''

  public allMatches$: Observable<any[]> =
    this.matchesService.getAllSeasonMatches();
url: string = 'url("https://upload.wikimedia.org/wikipedia/en/d/d6/Belarus_Premier_League_logo.png")';

  getTeamLogo(name: string): any {
    this.logo$ = this.matchesService.getLogo(name).subscribe();
    // return this.url;
  }
}
