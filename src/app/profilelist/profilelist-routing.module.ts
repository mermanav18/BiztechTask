import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilelistComponent } from './profilelist.component';

const routes: Routes = [
  {
    path:'',
    component:ProfilelistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilelistRoutingModule { }
