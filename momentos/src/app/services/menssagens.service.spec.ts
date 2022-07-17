import { TestBed } from '@angular/core/testing';

import { MenssagensService } from './menssagens.service';

describe('MenssagensService', () => {
  let service: MenssagensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenssagensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
