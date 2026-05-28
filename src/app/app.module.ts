import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  APP_INITIALIZER,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ConfigService } from './service/common/config.service';
import { SharedModule } from './shared/shared.module';
import { DatePipe } from '@angular/common';
import { MosqueLandingRoutingModule } from './mosque-landing/mosque-landing-routing.module';
import { HeaderDesktopComponent } from './layouts/header-desktop/header-desktop.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavDrawerComponent } from './layouts/nav-drawer/nav-drawer.component';
import {
  TranslateLoader, TranslateModule,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function initConfigInfo(urlList: ConfigService) {
  return () => urlList.getConfigFile();
}
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderDesktopComponent,
    FooterComponent,
    NavDrawerComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    MosqueLandingRoutingModule,

    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: APP_INITIALIZER,
      useFactory: initConfigInfo,
      deps: [ConfigService],
      multi: true,
    },
    DatePipe,

  ],
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
