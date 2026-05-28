import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverIslamComponent } from './discover-islam.component';

describe('DiscoverIslamComponent', () => {
  let component: DiscoverIslamComponent;
  let fixture: ComponentFixture<DiscoverIslamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverIslamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverIslamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
