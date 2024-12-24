import { Component } from '@angular/core';
import { SidebarComponent } from "../../../sidebar/sidebar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-front-page',
  imports: [RouterModule, SidebarComponent],
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.scss'
})
export class FrontPageComponent {

}
