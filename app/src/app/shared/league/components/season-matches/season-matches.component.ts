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


  public allMatches$: Observable<any[]> =
    this.matchesService.getAllSeasonMatches();

}
