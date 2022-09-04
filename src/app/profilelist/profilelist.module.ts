import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilelistRoutingModule } from './profilelist-routing.module';
import { ProfilelistComponent } from './profilelist.component';
import { ConcatePipe } from '../pipes/concate.pipe';

@NgModule({
  declarations: [
    ProfilelistComponent,
    ConcatePipe,
  ],
  imports: [
    CommonModule,
    ProfilelistRoutingModule
  ]
})
export class ProfilelistModule { }
