import { Component, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NavDrawerServiceService } from 'src/app/service/common/nav-drawer/nav-drawer-service.service';
import { LanguageService } from 'src/app/service/language/language.service';

@Component({
  selector: 'app-header-desktop',
  templateUrl: './header-desktop.component.html',
  styleUrls: ['./header-desktop.component.scss'],
})
export class HeaderDesktopComponent {
  isScrolled = false;
  scrollHeight = 70;
  showDiscoverIslamDropdown = false;
  showAboutDropdown = false;
  timezone: any;
  currentLanguage: string = 'bn';

  constructor(
    private navDrawerService: NavDrawerServiceService,
    private router: Router,
    private translate: TranslateService,
    private languageService: LanguageService
  ) {
    this.translate.use(this.currentLanguage.toLocaleLowerCase());
    this.translate.use(this.currentLanguage.toLocaleLowerCase());
    this.languageService.setFontClass(this.currentLanguage.toLocaleLowerCase());
  }
  ngOnInit() {
    this.isScrolled = window.scrollY > this.scrollHeight;
    this.currentLanguage = this.languageService.setLanguageBasedOnTimezone();
    //saving to Local storage

    const lang = localStorage.getItem('selectedLang');
    if (lang) {
      this.currentLanguage = lang;
      this.translate.use(this.currentLanguage);
      console.log(this.currentLanguage);
    }
  }
  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'bn' ? 'en' : 'bn';
    this.translate.use(this.currentLanguage);
    localStorage.setItem('selectedLang', this.currentLanguage);
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > this.scrollHeight;
  }

  openNavDrawer() {
    this.navDrawerService.openNavDrawer();
  }
}
