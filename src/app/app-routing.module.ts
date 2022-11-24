import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DEMOComponent } from './demo/demo.component';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"DEMO",
    component:DEMOComponent,
    canActivate: [LoginGuard]
  },
  {
    path:'**',
    redirectTo:"login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
