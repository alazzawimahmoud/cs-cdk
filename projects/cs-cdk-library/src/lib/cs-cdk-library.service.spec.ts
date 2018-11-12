import { TestBed } from '@angular/core/testing';

import { CsCdkLibraryService } from './cs-cdk-library.service';

describe('CsCdkLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CsCdkLibraryService = TestBed.get(CsCdkLibraryService);
    expect(service).toBeTruthy();
  });
});
