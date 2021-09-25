import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BusinessService } from 'src/app/stores/business';

@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {
  title: string;
  businesses: any[];

  constructor(
    private router: Router,
    private businessService: BusinessService,
    private navCtrl: NavController
  ) {}

  async ngOnInit() {
    const { state } = this.router.getCurrentNavigation().extras;
    this.title = state?.business;

    this.getBusiness(state?.business);
  }

  async getBusiness(title) {
    const res = await this.businessService.getList(title);
    this.businesses = res[0].objectList;
  }

  goTo(profile) {
    this.navCtrl.navigateForward('business-info', {
      state: { profile },
    });
  }
}
