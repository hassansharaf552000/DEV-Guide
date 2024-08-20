import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
const routes: Routes = [
  {
    path: 'developer',
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
      import('./modules/developer/Components/guest/guest.module').then(
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
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
