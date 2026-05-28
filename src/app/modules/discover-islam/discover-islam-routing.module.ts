import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverIslamComponent } from './discover-islam.component';
import { AboutIslamComponent } from './components/about-islam/about-islam.component';
import { DuasComponent } from './components/duas/duas.component';
import { EtiquettesComponent } from './components/etiquettes/etiquettes.component';

const routes: Routes = [
  { path: '', component: DiscoverIslamComponent },
  { path: 'about-islam', component: AboutIslamComponent },
  { path: 'duas', component: DuasComponent },
  { path: 'etiquette', component: EtiquettesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverIslamRoutingModule {}
