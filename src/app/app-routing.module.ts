import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { UserlayoutComponent } from './modules/developer/Components/userlayout/userlayout.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'developer',component:UserlayoutComponent,
    loadChildren: () =>
      import('./modules/developer/developer.module').then(
        (m) => m.DeveloperModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'guest',
    loadChildren: () =>
      import('./modules/guest/guest.module').then(
        (m) => m.GuestModule
      ),
  },
  {
    path: 'hr',
    loadChildren: () =>
      import('./modules/developer/Components/hr/hr.module').then(
        (m) => m.HrModule
      ),
  },
  {
    path: 'mentor',
    loadChildren: () =>
      import('./modules/developer/Components/mentor/mentor.module').then(
        (m) => m.MentorModule
      ),
  },
  { path: '**', redirectTo: 'developer/userlayout' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
