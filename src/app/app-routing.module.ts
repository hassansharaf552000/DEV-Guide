import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';
import { RequestComponent } from './shared/components/request/request.component'; // تأكد من المسار الصحيح
import { AdminGuard, DeveloperGuard, HRGuard, MentorGuard } from './core/guards/AuthGuard';


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AdminGuard],


  },
  {
    path: 'developer',
    loadChildren: () =>
      import('./modules/developer/developer.module').then(
        (m) => m.DeveloperModule
      ),
    canActivate: [DeveloperGuard],


  },
  {
    path: 'guest',
    loadChildren: () =>
      import('./modules/guest/guest.module').then((m) => m.GuestModule)
  },
  {
    path: 'hr',
    loadChildren: () =>
      import('./modules/hr/hr.module').then((m) => m.HrModule),
    canActivate: [HRGuard],


  },
  {
    path: 'mentor',
    loadChildren: () =>
      import('./modules/mentor/mentor.module').then((m) => m.MentorModule),
    canActivate: [MentorGuard],


  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/developer/developer.module').then(
        (m) => m.DeveloperModule
      ),
    //canActivate:[RoleRedirectGuard],



  },
  // توجيه مسار الخطأ 500 إلى ErrorPageComponent
  { path: 'server-error', component: ErrorPageComponent },

  // توجيه المسار الغير موجود إلى NotFoundComponent
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
