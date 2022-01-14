import { Component, OnInit } from '@angular/core';
import { IonicSwiper, NavController } from '@ionic/angular';
import SwiperCore from 'swiper';

SwiperCore.use([IonicSwiper]);

@Component({
  selector: 'app-discover-grid',
  templateUrl: './discover-grid.component.html',
  styleUrls: ['./discover-grid.component.scss'],
})
export class DiscoverGridComponent implements OnInit {
  groups = [
    [
      { title: 'Accommodation', icon: 'bed-outline' },
      { title: 'Food & Drinks', icon: 'fast-food-outline' },
    ],
    [
      { title: 'Wineries', icon: 'wine-outline' },
      { title: 'Activities', icon: 'bicycle-outline' },
    ],
    [
      { title: 'Wedding Venues', icon: 'heart-circle-outline' },
      { title: 'Events', icon: 'calendar-number-outline' },
    ],
  ];
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  goTo(business) {
    this.navCtrl.navigateForward('business', {
      state: { business },
    });
  }
}
