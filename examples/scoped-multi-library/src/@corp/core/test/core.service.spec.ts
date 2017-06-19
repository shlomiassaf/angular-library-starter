import {
  inject,
  TestBed
} from '@angular/core/testing';

import { CoreService } from '@corp/core';

describe('CoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ CoreService ]}));

  it('should initialize CoreService', inject([ CoreService ], (coreService: CoreService) => {
    expect(coreService.value).toEqual('Angular Library Starter - Core Service');
  }));

});
