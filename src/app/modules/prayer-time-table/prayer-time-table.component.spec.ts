import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerTimeTableComponent } from './prayer-time-table.component';

describe('PrayerTimeTableComponent', () => {
  let component: PrayerTimeTableComponent;
  let fixture: ComponentFixture<PrayerTimeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrayerTimeTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrayerTimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
