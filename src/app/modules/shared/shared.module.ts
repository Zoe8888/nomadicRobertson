import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AccordionComponent } from 'src/app/components/accordion/accordion.component';
import { BlogItemComponent } from 'src/app/components/blog-item/blog-item.component';
import { DiscoverGridComponent } from 'src/app/components/discover-grid/discover-grid.component';
import { ProfileDetailsHeaderComponent } from 'src/app/components/profile-details-header/profile-details-header.component';
import { SwiperModule } from 'swiper/angular';
import { SosGridComponent } from 'src/app/components/sos-grid/sos-grid.component';

@NgModule({
  declarations: [
    BlogItemComponent,
    DiscoverGridComponent,
    ProfileDetailsHeaderComponent,
    AccordionComponent,
    SosGridComponent
  ],
  imports: [CommonModule, SwiperModule],
  exports: [
    BlogItemComponent,
    DiscoverGridComponent,
    ProfileDetailsHeaderComponent,
    SwiperModule,
    AccordionComponent,
    SosGridComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
