import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { SosPageRoutingModule } from './sos-routing.module';
import { SosPage } from './sos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SosPageRoutingModule,
    SharedModule
  ],
  declarations: [SosPage]
})
export class SosPageModule {}
