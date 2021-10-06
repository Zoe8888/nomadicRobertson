import { Component, OnInit } from '@angular/core';
import { IonicSwiper } from '@ionic/core';
import { PaarlQuery, PaarlService } from 'src/app/stores/paarl';
import SwiperCore from 'swiper';

SwiperCore.use([IonicSwiper]);

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  constructor(
    private paarlQuery: PaarlQuery,
    private paarlService: PaarlService
  ) {}

  async ngOnInit() {
    await this.paarlService.getAbout();
  }

  async showAbout() {
    await this.paarlService.showAbout();
  }
}
