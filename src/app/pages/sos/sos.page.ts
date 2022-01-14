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
      { title: 'Doctors', icon: 'fitness-outline'},
      { title: 'Police Station', icon: 'shield-outline', id: 'two' },
      { title: 'Physiotherapy', icon: 'hand-left-outline'},
    ],
    [
      { title: 'Hospitals', icon: 'pulse-outline'},
      { title: 'Ambulance', icon: 'medical-outline', id: 'two' },
      { title: 'Vets', icon: 'paw-outline'},
    ],
    [
      { title: 'Dentist', icon: 'business-outline'},
      { title: 'Fire Station', icon: 'flame-outline', id: 'two' },
      { title: 'Pharmacies', icon: 'medkit-outline'},
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
