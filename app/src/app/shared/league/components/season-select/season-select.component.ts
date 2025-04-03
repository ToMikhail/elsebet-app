import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

interface Season {
  id: number;
  seasonName: string;
}

@Component({
  selector: 'app-season-select',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './season-select.component.html',
  styleUrl: './season-select.component.scss',
})
export class SeasonSelectComponent {
  public readonly seasons: Season[] = [
    { id: 1, seasonName: '2024' },
    { id: 2, seasonName: '2023' },
    { id: 3, seasonName: '2022' },
  ];

  public selectedSeason: string = '';

  constructor(private router: Router) {
    this.selectedSeason = this.seasons[0].seasonName;
  }

  onSelectionChange(event: any): void {
    this.router.navigate([], { queryParams: { season: this.selectedSeason } });
  }
}
