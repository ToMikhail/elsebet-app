import { Component } from '@angular/core';
import { LogoComponent } from "../../shared/logo/logo.component";
import { NavbarComponent } from "../../shared/navbar/navbar.component";

@Component({
  selector: 'app-header',
  imports: [LogoComponent, NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
