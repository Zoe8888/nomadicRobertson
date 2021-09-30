import { Component, OnInit } from '@angular/core';
import { PromotionQuery, PromotionService } from 'src/app/stores/promotion';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.page.html',
  styleUrls: ['./promotions.page.scss'],
})
export class PromotionsPage implements OnInit {
  constructor(
    private promotionService: PromotionService,
    public promotionQuery: PromotionQuery
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.promotionService.getList();
  }
}
