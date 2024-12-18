import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import { MockLeaguesService } from './../../services/mock-leagues.service';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [NgFor ,JsonPipe, AsyncPipe],
  providers: [MockLeaguesService],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  public leaguesList$: any;
  private mockLeaguesService = inject(MockLeaguesService);
  ngOnInit(): void {
    // this.mockLeaguesService.getLeagues().subscribe(
    //   (leagues: any) => {
    //     console.log('leagues stream: ', leagues);
    //   },
    //   (error: Error) => console.log('error: ', error)
    // );

    this.leaguesList$ = this.mockLeaguesService.getLeagues();
  }
}
