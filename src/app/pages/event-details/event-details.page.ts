import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/stores/event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {
  event: any;
  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {
    this.route.queryParams.subscribe(({ event }) => {
      if (event) {
        console.log(JSON.parse(event));
        this.event = JSON.parse(event);
        this.eventService.getEvent(this.event.id);
      }
    });
  }

  ngOnInit() {}
}
