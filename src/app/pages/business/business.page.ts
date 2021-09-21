import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessService } from 'src/app/stores/business';

@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {
  title: string;

  constructor(
    private router: Router,
    private businessService: BusinessService
  ) {}

  async ngOnInit() {
    const { state } = this.router.getCurrentNavigation().extras;
    this.title = state?.business;

    await this.businessService.getList(state?.business);
  }
}
