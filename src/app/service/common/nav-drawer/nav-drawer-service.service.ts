import { Injectable } from '@angular/core';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { NavDrawerComponent } from 'src/app/layouts/nav-drawer/nav-drawer.component';

@Injectable({
  providedIn: 'root',
})
export class NavDrawerServiceService {
  constructor(private drawerService: NzDrawerService) {}
  //CREATE MODAL
  openNavDrawer(): void {
    this.drawerService.create({
      nzTitle: '',
      nzContent: NavDrawerComponent,
      nzBodyStyle: {
        padding: '0',
      },
      // nzData: {},
      nzWidth: 320,
      nzMask: true,
      nzMaskClosable: true,
      nzWrapClassName: 'nav-drawer-wrapper',
      nzNoAnimation: false,
      nzClosable: true,
      nzPlacement: 'left',
    });
  }
}
