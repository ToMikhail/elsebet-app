import { MockLeagueService } from './../../services/mock-league.service';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LeagueTableComponent } from './components/league-table/league-table.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SeasonSelectComponent } from './components/season-select/season-select.component';

@Component({
  selector: 'app-league',
  imports: [MatCardModule, MatTabsModule, LeagueTableComponent, SeasonSelectComponent],
  // providers: [{ provide: MockLeagueService, useClass: MockLeagueService }],
  providers: [MockLeagueService], // alternative method to inject service
  templateUrl: './league.component.html',
  styleUrl: './league.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueComponent implements OnInit {
  private _mockLeagueService: MockLeagueService = inject(MockLeagueService);
  public leagueData: any;

  constructor(private httpClient: HttpClient) {
    console.log('mockLeagueService');
  }

  ngOnInit(): void {
    this._mockLeagueService.getLeague('by1').subscribe((data) => {
      this.leagueData = data;
      console.log('leagueData: ', this.leagueData);
    });
  }
}
