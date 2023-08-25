import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraveenSinghComponent } from './praveen-singh.component';

describe('PraveenSinghComponent', () => {
  let component: PraveenSinghComponent;
  let fixture: ComponentFixture<PraveenSinghComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PraveenSinghComponent]
    });
    fixture = TestBed.createComponent(PraveenSinghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
