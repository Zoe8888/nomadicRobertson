import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LightboxModule } from 'ngx-lightbox';
import { AccordionComponent } from 'src/app/components/accordion/accordion.component';
import { SettingsComponent } from 'src/app/components/settings/settings.component';
import { BlogItemComponent } from 'src/app/components/blog-item/blog-item.component';
import { DiscoverGridComponent } from 'src/app/components/discover-grid/discover-grid.component';
import { ProfileDetailsHeaderComponent } from 'src/app/components/profile-details-header/profile-details-header.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    BlogItemComponent,
    DiscoverGridComponent,
    ProfileDetailsHeaderComponent,
    AccordionComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    SwiperModule,
    LightboxModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    BlogItemComponent,
    DiscoverGridComponent,
    ProfileDetailsHeaderComponent,
    SwiperModule,
    AccordionComponent,
    SettingsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
