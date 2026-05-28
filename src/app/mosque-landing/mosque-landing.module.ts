import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MosqueLandingRoutingModule } from './mosque-landing-routing.module';
import { MosqueLandingComponent } from './mosque-landing.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { PrayerTimeComponent } from './components/prayer-time/prayer-time.component';
import { JannahWayComponent } from './components/jannah-way/jannah-way.component';
import { ServicesComponent } from './components/services/services.component';
import { SharedModule } from '../shared/shared.module';
import { DonationComponent } from './components/donation/donation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@NgModule({
  declarations: [
    MosqueLandingComponent,
    HeroBannerComponent,
    PrayerTimeComponent,
    JannahWayComponent,
    ServicesComponent,
    DonationComponent,
    AboutUsComponent,
  ],
  imports: [
    CommonModule,
    MosqueLandingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TranslateModule,
  ],
})
export class MosqueLandingModule {}
