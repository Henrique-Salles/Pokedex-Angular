import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTypesComponent } from './details-types.component';

describe('DetailsTypesComponent', () => {
  let component: DetailsTypesComponent;
  let fixture: ComponentFixture<DetailsTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsTypesComponent]
    });
    fixture = TestBed.createComponent(DetailsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
