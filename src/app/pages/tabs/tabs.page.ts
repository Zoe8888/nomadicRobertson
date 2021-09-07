import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/stores/weather';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit {
  constructor(private weather: WeatherService) {}

  ngOnInit() {
    this.weather.getToday();
  }
}
