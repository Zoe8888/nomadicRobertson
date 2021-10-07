import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BlogItemComponent } from 'src/app/components/blog-item/blog-item.component';
import { DiscoverCardComponent } from 'src/app/components/discover-card/discover-card.component';
import { DiscoverGridComponent } from 'src/app/components/discover-grid/discover-grid.component';
import { ProfileDetailsHeaderComponent } from 'src/app/components/profile-details-header/profile-details-header.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    BlogItemComponent,
    DiscoverCardComponent,
    DiscoverGridComponent,
    ProfileDetailsHeaderComponent,
  ],
  imports: [CommonModule, SwiperModule],
  exports: [
    BlogItemComponent,
    DiscoverCardComponent,
    DiscoverGridComponent,
    ProfileDetailsHeaderComponent,
    SwiperModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
