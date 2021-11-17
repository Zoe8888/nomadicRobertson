import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ProfileService } from 'src/app/stores/profile';

@Component({
  selector: 'app-sos-profiles',
  templateUrl: './sos-profiles.page.html',
  styleUrls: ['./sos-profiles.page.scss'],
})
export class SosProfilesPage implements OnInit {
  title: string;
  profiles: any[];
  searchProfiles: any[];

  constructor(
    private router: Router,
    private profileService: ProfileService,
    private navCtrl: NavController
  ) { }

  async ngOnInit() {
    const { state } = this.router.getCurrentNavigation().extras;
    this.title = state?.business;

    this.getBusiness(state?.business);
  }

  async getBusiness(title: string) {
    const res = await this.profileService.getList(title);
    this.profiles = res[0].objectList;
  }

  goTo(uniqueId) {
    this.navCtrl.navigateForward('profile-info', {
      state: { uniqueId },
    });
  }

  searchProfile(event) {
    const found = this.profiles.filter((profile) =>
      profile?.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    this.searchProfiles = found;
  }
}
