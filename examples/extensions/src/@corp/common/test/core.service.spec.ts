import {
  inject,
  TestBed
} from '@angular/core/testing';

import { CommonService } from '@corp/common';

describe('CommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ CommonService ]}));

  it('should initialize CommonService', inject([ CommonService ], (commonService: CommonService) => {
    expect(commonService.value).toEqual('Angular Library Starter - Common Service');
  }));

});
