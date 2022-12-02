import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authmodule/login/login.component';
import { SignInComponent } from './Authmodule/sign-in/sign-in.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
    {path:"login" , component:LoginComponent},
    {path:"sign-up" , component:SignInComponent},
    {path:"" , pathMatch:"full" , redirectTo:'login'},
    {
      path: 'admin',
      canActivate:[AuthGuard],
      loadChildren: () => import('./usermodule/user/user.module').then(m => m.UserModule)
     }
  

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
