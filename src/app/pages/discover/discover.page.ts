import { Component, OnInit } from '@angular/core';
import { IonicSwiper, ModalController } from '@ionic/angular';
import { WeatherQuery } from 'src/app/stores/weather';
import SwiperCore from 'swiper';
import { TopAttractionsPage } from '../top-attractions/top-attractions.page';
import { WeatherPage } from '../weather/weather.page';

SwiperCore.use([IonicSwiper]);

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
