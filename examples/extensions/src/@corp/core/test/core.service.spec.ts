import {
  inject,
  TestBed
} from '@angular/core/testing';

import { CoreService } from '@corp/core';
import { CoreTestMocker } from '@corp/core/testing';

describe('CoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ CoreService ]}));

  it('should initialize CoreService', inject([ CoreService ], (coreService: CoreService) => {
    expect(coreService.value).toEqual('Angular Library Starter - Core Service');
  }));

  it('should load test util', () => {
    expect(new CoreTestMocker().howMuchIsOnePlusOne()).toBe(2);
  });
});
