import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileaddeditRoutingModule } from './profileaddedit-routing.module';
import { ProfileaddeditComponent } from './profileaddedit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileaddeditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileaddeditRoutingModule
  ]
})
export class ProfileaddeditModule { }
