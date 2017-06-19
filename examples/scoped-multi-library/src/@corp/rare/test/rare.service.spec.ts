import {
  inject,
  TestBed
} from '@angular/core/testing';

import { RareService } from '@corp/rare';

describe('RareService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ RareService ]}));

  it('should initialize RareService', inject([ RareService ], (rareService: RareService) => {
    expect(rareService.value).toEqual('Angular Library Starter - Rare Service');
  }));

});
