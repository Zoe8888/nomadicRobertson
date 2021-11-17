import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SosProfilesPage } from './sos-profiles.page';

const routes: Routes = [
  {
    path: '',
    component: SosProfilesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SosProfilesPageRoutingModule {}
