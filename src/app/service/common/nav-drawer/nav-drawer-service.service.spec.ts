import { TestBed } from '@angular/core/testing';

import { NavDrawerServiceService } from './nav-drawer-service.service';

describe('NavDrawerServiceService', () => {
  let service: NavDrawerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavDrawerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
