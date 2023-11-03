import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './modules/login/components/login-form/login-form.component';

const routes: Routes = [{ path: "", redirectTo: "/home", pathMatch: "full" }, {path: "home", component: LoginFormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
