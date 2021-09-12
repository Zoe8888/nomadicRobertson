import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {
  event: any;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(({ event }) => {
      if (event) {
        console.log(JSON.parse(event));
        this.event = JSON.parse(event);
      }
    });
  }

  ngOnInit() {}
}
