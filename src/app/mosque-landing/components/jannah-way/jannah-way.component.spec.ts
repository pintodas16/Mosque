import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JannahWayComponent } from './jannah-way.component';

describe('JannahWayComponent', () => {
  let component: JannahWayComponent;
  let fixture: ComponentFixture<JannahWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JannahWayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JannahWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
