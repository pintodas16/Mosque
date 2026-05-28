import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  // isSidebar:boolean = false;
  private sidebarState = new BehaviorSubject<boolean>(false);
  public sidebarState$ = this.sidebarState.asObservable();

  private dashboardBody = new BehaviorSubject<boolean>(false);
  public dashboardBody$ = this.dashboardBody.asObservable();

  constructor() {}

  toggleSidebar(): void {
    this.sidebarState.next(true);
  }

  toggleBody(): void {
    this.dashboardBody.next(true);
  }
}
