import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AttractionService } from 'src/app/stores/attraction';
import { RobertsonService } from 'src/app/stores/robertson';
import { WeatherQuery, WeatherService } from 'src/app/stores/weather';
import { BusinessSearchPage } from '../business-search/business-search.page';
import { TopAttractionsPage } from '../top-attractions/top-attractions.page';
import { WeatherPage } from '../weather/weather.page';
import { ActivityQuery, ActivityService } from 'src/app/stores/activity';
import { BlogService } from 'src/app/stores/blog';
@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  categories = [
    { name: 'accomodation', items: [] },
    { name: 'wineries', items: [] },
  ];
  ready: boolean;

  slideOpts = {
    loop: true,
    autoplay: {
      delay: 3000,
    },
  };
  constructor(
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    public weather: WeatherQuery,
    private attractions: AttractionService,
    private weatherService: WeatherService,
    private robertsonService: RobertsonService,
    public activityQuery: ActivityQuery,
    private activityService: ActivityService,
    private blogService: BlogService,
  ) {}

  ngOnInit() {
    this.attractions.getTop();
  }

  ionViewWillEnter() {
    this.weatherService.getToday();
    this.activityService.getList();
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

  async showAbout() {
    await this.robertsonService.showAbout();
  }

  async showSearch() {
    const modal = await this.modalCtrl.create({
      component: BusinessSearchPage,
      initialBreakpoint: 0.65,
      breakpoints: [0, 0.65, 1],
    });

    modal.onDidDismiss().then(({ data }) => {
      if (data) {
        this.goTo(data);
      }
    });

    return modal.present();
  }

  goTo(profile) {
    this.navCtrl.navigateForward('business-info', {
      state: { profile },
    });
  }

  goToSOS(){
    this.navCtrl.navigateForward('sos');
  }
}
