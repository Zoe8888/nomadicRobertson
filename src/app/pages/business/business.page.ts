import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { ProfileService, ProfileQuery } from 'src/app/stores/profile';

@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {
  title: string;
  profiles: any[];
  searchProfiles: any[];
  businessList: any[];
  sortList: Array<any> = [];

  constructor(
    private router: Router,
    private profileService: ProfileService,
    private profileQuery: ProfileQuery,
    private navCtrl: NavController,
    public alertCtrl: AlertController,
  ) {}

  async ngOnInit() {
    const { state } = this.router.getCurrentNavigation().extras;
    this.title = state?.business;

    this.getBusiness(state?.business);
    this.businessList = this.profileQuery.getAll();
  }

  async getBusiness(title: string) {
    const res = await this.profileService.getList(title);
    this.profiles = res[0].objectList;
  }

  goTo(profile) {
    this.navCtrl.navigateForward('business-info', {
      state: { profile },
    });
  }

  searchProfile(event) {
    const found = this.profiles.filter((profile) =>
      profile?.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    this.searchProfiles = found;
  }

  async popSort(event) {
    const alert =  await this.alertCtrl.create({
      inputs: [
        {
          type: 'checkbox',
          label: 'Distance',
          value: 'Distance'
        },
      ],
      buttons:[
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Okay',
          handler: data => {
              if (data[0] === 'Distance'){
                this.sortList = this.businessList.sort((a, b) => (a.distanceKm > b.distanceKm) ? 1 : -1);
              }
              else{
                this.sortList = this.businessList.sort((a, b) => (a.title > b.title) ? 1 : -1);
              }
              this.businessList = this.sortList;
            }
          }
      ]
    });
    await alert.present();
  }
}
