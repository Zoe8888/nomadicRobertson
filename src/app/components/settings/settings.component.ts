import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { UntilDestroy } from '@ngneat/until-destroy';
import { UserQuery, UserService } from 'src/app/stores/user';
import { UtilQuery, UtilService } from 'src/app/stores/util';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-account-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  preferences = {
    daily: {
      header: 'Email Updates',
      subHeader:
        'You are currently receiving email updates from the groups and people you follow.',
      message: 'Do you want to continue receiving the updates?',
    },
    important: {
      header: 'Email Updates',
      subHeader:
        'You are currently receiving important emails that are sent from your groups.',
      message: 'Do you want to continue receiving the updates?',
    },
  };
  user: any;
  form: FormGroup = this.formBuilder.group({
    email: [{ value: '' }],
    firstName: [{ value: '' }],
    lastName: [{ value: '' }],
    city: [{ value: '' }],
    state: [{ value: '' }],
    country: [{ value: '' }],
    postalCode: [{ value: '' }],
    description: [{ value: '' }],
    privacy: [{ value: '' }],
    emailOptIn: [{ value: '' }],
    emailDigest: [{ value: '' }],
  });

  constructor(
    private formBuilder: FormBuilder,
    public userQuery: UserQuery,
    private userService: UserService,
    private utilService: UtilService,
    public utilQuery: UtilQuery,
    private toastCtrl: ToastController
  ) {
    this.getSettings();
  }

  ngOnInit() {
    this.getCountries();
  }

  async getCountries() {
    await this.utilService.getCountryList();
  }

  async getSettings() {
    const settings = await this.userService.getSettings();
    this.form.patchValue(settings);
  }

  async saveChanges() {
    await this.userService
      .updateSettings(this.form.getRawValue())
      .then(async (success) => {
        const toast = await this.toastCtrl.create({
          message: success
            ? 'Your changes has been saved'
            : 'Something weird happened, please try again',
          duration: 3000,
          color: success ? 'success' : 'danger',
        });

        toast.present();
      });
  }
}
