import { BlockParameter } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogEventsComponent } from './blog-events/blog-events.component';

const routes: Routes = [
  {
    path:'blogs-events',
    component:BlogEventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
