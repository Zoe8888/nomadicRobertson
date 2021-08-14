import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { DiscoverCardComponent } from 'src/app/components/discover-card/discover-card.component';

@NgModule({
  declarations: [DiscoverCardComponent],
  imports: [CommonModule],
  exports: [DiscoverCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
