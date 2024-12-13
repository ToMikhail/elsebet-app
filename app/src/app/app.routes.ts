import { Routes } from '@angular/router';
import { FrontPageComponent } from './layout/main/components/front-page/front-page.component';
import { NewsComponent } from './layout/main/components/news/news.component';
import { AboutUsComponent } from './layout/main/components/about-us/about-us.component';

export const routes: Routes = [
  { path: '', component: FrontPageComponent},
  { path: 'news', component: NewsComponent },
  { path: 'about-us', component: AboutUsComponent },
];
