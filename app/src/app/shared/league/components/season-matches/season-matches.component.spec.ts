import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonMatchesComponent } from './season-matches.component';

describe('SeasonMatchesComponent', () => {
  let component: SeasonMatchesComponent;
  let fixture: ComponentFixture<SeasonMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeasonMatchesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
