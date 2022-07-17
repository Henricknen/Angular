import { TestBed } from '@angular/core/testing';

import { MomentoService } from './momento.service';

describe('MomentoService', () => {
  let service: MomentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MomentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
