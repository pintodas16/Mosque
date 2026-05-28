import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuasComponent } from './duas.component';

describe('DuasComponent', () => {
  let component: DuasComponent;
  let fixture: ComponentFixture<DuasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
