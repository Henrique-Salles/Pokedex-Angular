import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsImageComponent } from './details-image.component';

describe('DetailsImageComponent', () => {
  let component: DetailsImageComponent;
  let fixture: ComponentFixture<DetailsImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsImageComponent]
    });
    fixture = TestBed.createComponent(DetailsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
