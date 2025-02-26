import { Routes } from '@angular/router';
import { FrontPageComponent } from './layout/main/components/front-page/front-page.component';
import { NewsComponent } from './layout/main/components/news/news.component';
import { AboutUsComponent } from './layout/main/components/about-us/about-us.component';
import { LeagueComponent } from './shared/league/league.component';

export const routes: Routes = [
  { path: '', component: FrontPageComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'leagues/:idLeague/overview/premier-league', component: LeagueComponent },
    ]
  },
  { path: 'news', component: NewsComponent },
  { path: 'about-us', component: AboutUsComponent },
];
