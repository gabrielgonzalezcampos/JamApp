import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { MyguardGuard } from "./myguard.guard";
import {RegistrationComponent} from "./components/registration/registration.component";
import { SettingsComponent } from './components/settings/settings.component';
import {UserlistComponent} from "./components/userlist/userlist.component";

const routes: Routes = [
  { path: 'api/signin', component: LoginComponent },
  { path: 'api/signup', component: RegistrationComponent },
  { path: 'api/settings', component: SettingsComponent, canActivate: [MyguardGuard] },
  { path: 'api/userlist', component: UserlistComponent, canActivate: [MyguardGuard] },
  { path: '', redirectTo: '/api/signin', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
