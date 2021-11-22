import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sos',
  templateUrl: './sos.page.html',
  styleUrls: ['./sos.page.scss'],
})
export class SosPage implements OnInit {
  groups = [
    [
      { title: 'Healthcare Professionals', icon: 'medical-outline' },
      { title: 'Hospitals', icon: 'business-outline' },
    ],
    [
      { title: 'Police Stations', icon: 'shield-outline' },
      { title: 'Pharmacies', icon: 'medkit-outline' },
    ],
  ];

  constructor(
    private modalCtrl: ModalController,
    private navCtrl: NavController,
  ) {}

  ngOnInit() {}
  goTo(business) {
    this.navCtrl.navigateForward('sos-profiles', {
      state: { business },
    });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  call(phone) {
    window.open(`tel:${phone}`, '_system');
  }
}
