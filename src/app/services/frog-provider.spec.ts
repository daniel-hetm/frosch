import { TestBed } from '@angular/core/testing';

import { FrogProvider } from './frog-provider';

describe('FrogProvider', () => {
  let service: FrogProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrogProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
