import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'developer',
    loadChildren: () =>
      import('./modules/developer/developer.module').then(
        (m) => m.DeveloperModule
      ),
  },
  {
    path: 'guest',
    loadChildren: () =>
      import('./modules/guest/guest.module').then((m) => m.GuestModule),
  },
  {
    path: 'hr',
    loadChildren: () =>
      import('./modules/hr/hr.module').then((m) => m.HrModule),
  },
  {
    path: 'mentor',
    loadChildren: () =>
      import('./modules/mentor/mentor.module').then((m) => m.MentorModule),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
