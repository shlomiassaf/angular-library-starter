import { Component } from '@angular/core';

import { CommonService } from './common.service';

@Component({
  selector: 'common',
  templateUrl: './common.component.html',
  styleUrls: [ './common.component.scss' ]
})
export class CommonComponent {
  constructor(public commonService: CommonService) {
  }
}