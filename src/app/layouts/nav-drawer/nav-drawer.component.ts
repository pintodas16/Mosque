import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input } from '@angular/core';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('open', style({ height: '*' })),
      state('closed', style({ height: '0px', overflow: 'hidden' })),
      transition('open <=> closed', [animate('200ms ease-in-out')]),
    ]),
  ],
})
export class NavDrawerComponent {
  constructor(private drawerRef: NzDrawerRef) {}

  isSubMenuOpen1 = false;
  isSubMenuOpen2 = false;

  toggleSubMenu1() {
    this.isSubMenuOpen2 = false;
    this.isSubMenuOpen1 = !this.isSubMenuOpen1;
  }
  toggleSubMenu2() {
    this.isSubMenuOpen1 = false;
    this.isSubMenuOpen2 = !this.isSubMenuOpen2;
  }

  ngOnDestroy(): void {
    this.drawerRef.close();
  }
}
