import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PromotionQuery, PromotionService } from 'src/app/stores/promotion';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.page.html',
  styleUrls: ['./promotions.page.scss'],
})
export class PromotionsPage implements OnInit {
  constructor(
    private promotionService: PromotionService,
    public promotionQuery: PromotionQuery,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.promotionService.getList();
  }

  goTo(profile) {
    this.navCtrl.navigateForward('blog-details', {
      state: { profile },
    });
  }
}
