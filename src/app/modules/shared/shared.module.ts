import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { DiscoverCardComponent } from 'src/app/components/discover-card/discover-card.component';
import { DiscoverGridComponent } from 'src/app/components/discover-grid/discover-grid.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [DiscoverCardComponent, DiscoverGridComponent],
  imports: [CommonModule, SwiperModule],
  exports: [DiscoverCardComponent, DiscoverGridComponent, SwiperModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
