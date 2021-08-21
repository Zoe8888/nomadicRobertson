import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { DiscoverCardComponent } from 'src/app/components/discover-card/discover-card.component';
import { DiscoverGridComponent } from 'src/app/components/discover-grid/discover-grid.component';

@NgModule({
  declarations: [DiscoverCardComponent, DiscoverGridComponent],
  imports: [CommonModule],
  exports: [DiscoverCardComponent, DiscoverGridComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
