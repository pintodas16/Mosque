import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoverIslamRoutingModule } from './discover-islam-routing.module';
import { DiscoverIslamComponent } from './discover-islam.component';
import { AboutIslamComponent } from './components/about-islam/about-islam.component';
import { DuasComponent } from './components/duas/duas.component';
import { EtiquettesComponent } from './components/etiquettes/etiquettes.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    DiscoverIslamComponent,
    AboutIslamComponent,
    DuasComponent,
    EtiquettesComponent,
  ],
  imports: [CommonModule, DiscoverIslamRoutingModule, TranslateModule],
})
export class DiscoverIslamModule {}
