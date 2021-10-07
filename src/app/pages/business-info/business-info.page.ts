import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicSwiper } from '@ionic/core';
import SwiperCore from 'swiper';

SwiperCore.use([IonicSwiper]);

@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.page.html',
  styleUrls: ['./business-info.page.scss'],
})
export class BusinessInfoPage implements OnInit {
  profile: any;

  constructor(private router: Router) {}

  ngOnInit() {
    const { state } = this.router.getCurrentNavigation().extras;
    this.profile = state.profile;
  }
}
