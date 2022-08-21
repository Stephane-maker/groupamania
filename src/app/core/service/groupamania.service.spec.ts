import { TestBed } from '@angular/core/testing';

import { GroupamaniaService } from './groupamania.service';

describe('GroupamaniaService', () => {
  let service: GroupamaniaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupamaniaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
