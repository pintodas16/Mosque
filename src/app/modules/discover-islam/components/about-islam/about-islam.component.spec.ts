import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIslamComponent } from './about-islam.component';

describe('AboutIslamComponent', () => {
  let component: AboutIslamComponent;
  let fixture: ComponentFixture<AboutIslamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutIslamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutIslamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
