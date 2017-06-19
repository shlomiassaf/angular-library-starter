import {
  inject,
  TestBed
} from '@angular/core/testing';

import { MyLibService } from 'my-lib/src/my-lib.service';

describe('MyLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ MyLibService ]}));

  it('should initialize MyLibService', inject([ MyLibService ], (myLib: MyLibService) => {
    expect(myLib.myLib).toEqual('Angular Library Starter');
  }));

});
