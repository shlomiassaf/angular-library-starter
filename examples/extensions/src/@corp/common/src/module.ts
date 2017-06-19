import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

import { CoreModule } from '@corp/core';
import { CorePlusModule } from '@corp/core/plugins/core-plus';
import { CommonService } from './common.service';
import { CommonComponent } from './common.component';

@NgModule({
  declarations: [ CommonComponent ],
  imports: [ NgCommonModule, CoreModule, CorePlusModule ],
  exports: [ CommonComponent ],
  providers: [ CommonService ]
})
export class CommonModule {

}
