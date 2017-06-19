import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

import { CommonService } from './common.service';
import { CommonComponent } from './common.component';

@NgModule({
  declarations: [ CommonComponent ],
  imports: [ NgCommonModule ],
  exports: [ CommonComponent ],
  providers: [ CommonService ]
})
export class CommonModule {

}
