import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrayerTimeTableRoutingModule } from './prayer-time-table-routing.module';
import { PrayerTimeTableComponent } from './prayer-time-table.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PrayerTimeTableComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    PrayerTimeTableRoutingModule,
    SharedModule
  ]
})
export class PrayerTimeTableModule { }
