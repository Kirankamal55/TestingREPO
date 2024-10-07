import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestHomeComponent } from './test-home/test-home.component';
import { TestSignupComponent } from './test-signup/test-signup.component';
import { LoginComponent } from './Modules/auth/login/login.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
{
  path: '',
  canActivate:[authGuard],
  loadChildren: () => import('./Modules/home/home/home.module').then(m => m.HomeModule)
 // component:TestHomeComponent
},

{
  path: 'home',
  canActivate:[authGuard],
  loadChildren: () => import('./Modules/home/home/home.module').then(m => m.HomeModule)
  //component:TestHomeComponent
},
  {
  path: 'cms',
//  canActivate:[authGuard],
 loadChildren: () => import('./Modules/cms/cms.module').then(m => m.CmsModule)
 //component:TestSignupComponent,

},
{
  path:'auth',
 // canActivate:[authGuard],
  loadChildren: () => import('./Modules/auth/auth/auth.module'). then(m => m.AuthModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
