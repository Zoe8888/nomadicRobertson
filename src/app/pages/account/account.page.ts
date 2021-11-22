import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertController } from '@ionic/angular';
import { ProfileService } from 'src/app/stores/profile';
import { UserQuery, UserService } from 'src/app/stores/user';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  segment = 'Profile';
  wiki: any;
  followers: any;

  constructor(
    public alertCtrl: AlertController,
    public userQuery: UserQuery,
    public userService: UserService,
    private profileService: ProfileService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit() {}

  async ionViewDidEnter() {
    const uniqueId = this.userQuery.profile;
    console.log(uniqueId);
    this.wiki = await this.profileService.getWiki(uniqueId);
    this.followers = await this.profileService.getMemberList(uniqueId);
  }

  async signOut() {
    const alert = await this.alertCtrl.create({
      header: 'Sign Out',
      subHeader: 'Are you sure?',
      message: 'You will need to sign back in to share photos and comments.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Okay',
          handler: () => {
            this.userService.logout();
          },
        },
      ],
    });
    return await alert.present();
  }
}
