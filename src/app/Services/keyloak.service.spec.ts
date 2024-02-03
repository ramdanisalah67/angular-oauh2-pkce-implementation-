import { TestBed } from '@angular/core/testing';

import { KeyloakService } from './keyloak.service';

describe('KeyloakService', () => {
  let service: KeyloakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyloakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
