import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import { MockLeaguesService } from './../../services/mock-leagues.service';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-sidebar',
  imports: [
    JsonPipe,
    NgFor,
    AsyncPipe,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [MockLeaguesService],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  public leaguesList$: any;
  private mockLeaguesService = inject(MockLeaguesService);

  ngOnInit(): void {
    this.leaguesList$ = this.mockLeaguesService.getLeagues();
  }

  public childrenAccessor = (node: any) => node.leagues ?? [];

  public hasChild = (_: number, node: Country) =>
    !!node.leagues && node.leagues.length > 0;
}
