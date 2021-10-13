import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile-details-header',
  templateUrl: './profile-details-header.component.html',
  styleUrls: ['./profile-details-header.component.scss'],
})
export class ProfileDetailsHeaderComponent implements OnInit {
  @Input() profile: any;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  goTo(uniqueId) {
    this.navCtrl.navigateForward('profile-info', {
      state: { uniqueId },
    });
  }
}
