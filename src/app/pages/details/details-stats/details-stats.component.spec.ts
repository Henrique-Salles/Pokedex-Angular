import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsStatsComponent } from './details-stats.component';

describe('DetailsStatsComponent', () => {
  let component: DetailsStatsComponent;
  let fixture: ComponentFixture<DetailsStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsStatsComponent]
    });
    fixture = TestBed.createComponent(DetailsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
