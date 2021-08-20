import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover-card',
  templateUrl: './discover-card.component.html',
  styleUrls: ['./discover-card.component.scss'],
})
export class DiscoverCardComponent implements OnInit {
  @Input() text: any[];

  constructor() {}

  ngOnInit() {}
}
