import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WeatherQuery } from 'src/app/stores/weather';
import { TopAttractionsPage } from '../top-attractions/top-attractions.page';
import { WeatherPage } from '../weather/weather.page';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  categories = [
    { name: 'accomodations', items: [] },
    { name: 'wineries', items: [] },
  ];
  slideOpts = {
    loop: true,
    slidesPerView: 1.5,
  };

  constructor(
    private modalCtrl: ModalController,
    public weather: WeatherQuery
  ) {}

  ngOnInit() {}

  async showAttractions() {
    const modal = await this.modalCtrl.create({
      component: TopAttractionsPage,
    });

    modal.present();
  }

  async showWeather() {
    const modal = await this.modalCtrl.create({
      component: WeatherPage,
    });

    modal.present();
  }
}
