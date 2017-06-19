import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreService } from './core.service';
import { CoreComponent } from './core.component';

@NgModule({
  declarations: [ CoreComponent ],
  imports: [ CommonModule ],
  exports: [ CoreComponent ],
  providers: [ CoreService ]
})
export class CoreModule {

}
