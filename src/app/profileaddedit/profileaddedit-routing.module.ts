import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileaddeditComponent } from './profileaddedit.component';

const routes: Routes = [
  {
    path:'',
    component: ProfileaddeditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileaddeditRoutingModule { }
