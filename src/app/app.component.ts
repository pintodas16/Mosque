import { ViewportScroller } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LanguageService } from './service/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bhatalia_mosque';
  timezone: any;

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.setLanguageBasedOnTimezone();
  }
}
