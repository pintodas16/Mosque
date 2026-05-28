import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private renderer: Renderer2;

  constructor(
    private translate: TranslateService,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);

    // Listen for language change events
    this.translate.onLangChange.subscribe((event) => {
      this.setFontClass(event.lang);
    });

    // Set the initial language
    this.setFontClass(this.translate.currentLang || 'bn');
  }

  setFontClass(lang: string): void {
    if (lang === 'bn') {
      this.renderer.addClass(document.body, 'font-bangla');
      this.renderer.removeClass(document.body, 'font-english');
    } else {
      this.renderer.addClass(document.body, 'font-english');
      this.renderer.removeClass(document.body, 'font-bangla');
    }
  }

  //location
  timezone: any;
  getTimezone(): string {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  setLanguageBasedOnTimezone(): string {
    const timezone = this.getTimezone();
    if (timezone === 'Asia/Dhaka') {
      this.translate.use('bn');
      return 'bn';
    } else {
      this.translate.use('en');
      return 'en';
    }
  }
}
