import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component:HomeComponent
  // },
  {
    path:'ngOnchange',
    component:ChildComponent
  },
  {
    path:'ngOnchangeparent',
    component:ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
