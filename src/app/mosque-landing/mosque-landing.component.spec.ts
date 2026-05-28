import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosqueLandingComponent } from './mosque-landing.component';

describe('MosqueLandingComponent', () => {
  let component: MosqueLandingComponent;
  let fixture: ComponentFixture<MosqueLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MosqueLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MosqueLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
