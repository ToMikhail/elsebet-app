import { Component, Input, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { League } from '../../../../models/league.interface';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-league-table',
  imports: [MatTableModule],
  templateUrl: './league-table.component.html',
  styleUrl: './league-table.component.scss',
})
export class LeagueTableComponent {
  displayedColumns: string[] = [
    'position',
    'team',
    'played',
    'wins',
    'draws',
    'losses',
    'goals',
    'diff',
    'points',
  ];
  @Input() leagueData!: League;
}
