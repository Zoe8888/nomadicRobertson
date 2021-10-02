import { Component, OnInit } from '@angular/core';
import { IonicSwiper, ModalController } from '@ionic/angular';
import { AttractionService } from 'src/app/stores/attraction';
import { BlogQuery, BlogService } from 'src/app/stores/blog';
import { WeatherQuery, WeatherService } from 'src/app/stores/weather';
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
  ready: boolean;
  constructor(
    private modalCtrl: ModalController,
    public weather: WeatherQuery,
    private attractions: AttractionService,
    private weatherService: WeatherService,
    private blogService: BlogService,
    public blogQuery: BlogQuery
  ) {}

  ngOnInit() {
    this.attractions.getTop();
  }

  ionViewWillEnter() {
    this.weatherService.getToday();
    this.blogService.getList();
  }

  ionViewDidEnter() {
    this.ready = true;
  }

  async showAttractions() {
    this.attractions.getTop();
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
