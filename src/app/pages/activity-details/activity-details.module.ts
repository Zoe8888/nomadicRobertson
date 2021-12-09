import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { ActivityDetailsPageRoutingModule } from './activity-details-routing.module';
import { ActivityDetailsPage } from './activity-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [ActivityDetailsPage]
})
export class ActivityDetailsPageModule {}
