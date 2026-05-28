import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrayerTimeTableComponent } from './prayer-time-table.component';

const routes: Routes = [{ path: '', component: PrayerTimeTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrayerTimeTableRoutingModule { }
