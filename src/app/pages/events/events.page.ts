import { Component, OnInit } from '@angular/core';
import { EventQuery, EventService } from 'src/app/stores/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  constructor(
    private eventService: EventService,
    public eventQuery: EventQuery
  ) {}

  async ngOnInit() {
    await this.eventService.getList();
  }
}
