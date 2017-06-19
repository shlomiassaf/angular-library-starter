import { Component } from '@angular/core';

import { MyLibService } from './my-lib.service';

@Component({
  selector: 'my-lib',
  templateUrl: './my-lib.component.html',
  styleUrls: [ './my-lib.component.scss' ]
})
export class MyLibComponent {
  constructor(public myLibService: MyLibService) {
  }
}