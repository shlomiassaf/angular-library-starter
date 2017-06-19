import { Component } from '@angular/core';

import { CoreService } from './core.service';

@Component({
  selector: 'core',
  templateUrl: './core.component.html',
  styleUrls: [ './core.component.scss' ]
})
export class CoreComponent {
  constructor(public coreService: CoreService) {
  }
}