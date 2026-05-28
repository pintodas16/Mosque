import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mosque-landing',
    loadChildren: () =>
      import('./mosque-landing/mosque-landing.module').then(
        (m) => m.MosqueLandingModule
      ),
  },
  {
    path: 'prayer-time-table ',
    loadChildren: () =>
      import('./modules/prayer-time-table/prayer-time-table.module').then(
        (m) => m.PrayerTimeTableModule
      ),
  },
  { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule) },
  { path: 'discover-islam', loadChildren: () => import('./modules/discover-islam/discover-islam.module').then(m => m.DiscoverIslamModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
