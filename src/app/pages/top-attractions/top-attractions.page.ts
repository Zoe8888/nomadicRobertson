import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AttractionQuery } from 'src/app/stores/attraction';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-top-attractions',
  templateUrl: './top-attractions.page.html',
  styleUrls: ['./top-attractions.page.scss'],
})
export class TopAttractionsPage implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    public attractions: AttractionQuery,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
  goTo(profile) {
    this.navCtrl.navigateForward('business-info', {
      state: { profile },
    });
    this.dismiss();
  }
}
