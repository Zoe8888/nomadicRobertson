import { Component, OnInit } from '@angular/core';
import { IonicSwiper, NavController } from '@ionic/angular';
import SwiperCore from 'swiper';

SwiperCore.use([IonicSwiper]);

@Component({
  selector: 'app-sos-grid',
  templateUrl: './sos-grid.component.html',
  styleUrls: ['./sos-grid.component.scss'],
})
export class SosGridComponent implements OnInit {
  groups = [
    [
      { title: 'SOS - Healthcare Professionals', icon: 'medical-outline' },
      { title: 'SOS - Hospitals', icon: 'business-outline' },
    ],
    [
      { title: 'SOS - Police Stations', icon: 'shield-outline' },
      { title: 'SOS - Pharmacies', icon: 'wine-outline' },
    ],
  ];
  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
  goTo(business) {
    this.navCtrl.navigateForward('sos-profiles', {
      state: { business },
    });
  }
}
