import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SosProfilesPageRoutingModule } from './sos-profiles-routing.module';

import { SosProfilesPage } from './sos-profiles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SosProfilesPageRoutingModule
  ],
  declarations: [SosProfilesPage]
})
export class SosProfilesPageModule {}
