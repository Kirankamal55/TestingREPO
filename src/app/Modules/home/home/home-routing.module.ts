import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { tick } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { AuthComponent } from '../../auth/auth/auth.component';
import { authGuard } from '../../../core/guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'home',
   // canActivate:[authGuard],
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
