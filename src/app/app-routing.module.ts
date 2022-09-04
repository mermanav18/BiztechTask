import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    loadChildren:() => import('./profilelist/profilelist.module').then(mod => mod.ProfilelistModule)
  },
  {
    path:'profileaddedit',
    loadChildren:() => import('./profileaddedit/profileaddedit.module').then(mod => mod.ProfileaddeditModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
