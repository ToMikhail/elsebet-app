import { Component } from '@angular/core';
import { LayoutComponent } from "./layout/layout.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [LayoutComponent],
})
export class AppComponent {
  title = 'elsebet';

}
