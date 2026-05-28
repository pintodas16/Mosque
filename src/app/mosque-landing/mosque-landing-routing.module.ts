import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MosqueLandingComponent } from './mosque-landing.component';
import { PrayerTimeTableComponent } from '../modules/prayer-time-table/prayer-time-table.component';

const routes: Routes = [
  {
    path: "",
    component: MosqueLandingComponent,
    children: [
      {
        path: "",
        component: MosqueLandingComponent
      },
    ]
  },
  { path: 'prayer-time-table', component: PrayerTimeTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MosqueLandingRoutingModule { }
