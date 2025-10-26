import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelListeningComponent } from './hotel-listening.component';

describe('HotelListeningComponent', () => {
  let component: HotelListeningComponent;
  let fixture: ComponentFixture<HotelListeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelListeningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelListeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
