import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyLibService } from './my-lib.service';
import { MyLibComponent } from './my-lib.component';

@NgModule({
  declarations: [ MyLibComponent ],
  imports: [ CommonModule ],
  exports: [ MyLibComponent ],
  providers: [ MyLibService ]
})
export class MyLibModule {

}
