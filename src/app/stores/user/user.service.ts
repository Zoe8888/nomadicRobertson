import { Injectable } from '@angular/core';
import { resetStores } from '@datorama/akita';
import { NavController } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import { Md5 } from 'ts-md5';
import { UserStore } from './user.store';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(
    private userStore: UserStore,
    private http: HttpService,
    public navCtrl: NavController
  ) {}

  async login(username, password) {
    // this.sharedService.presentLoading();
    const ha1 = Md5.hashStr(
      `${username}:${environment.realm}:${password}`
    ).toString();
    this.userStore.update({ username, ha1 });
    return await this.http
      .request('GET', 'site')
      .then((result) => {
        resetStores({ exclude: ['user'] });
        const data = result[0].objectList[0];
        this.userStore.update({ data });
        if (!data.isGuest) {
          // this.sharedService.presentToast(`${data.firstName} has successfuly logged in`, 'success')
        }
        return result[0];
      })
      .catch((error) => {
        console.log(error);
        // this.sharedService.presentError('Error', error.error)
        this.userStore.reset();
        return error;
      })
      .finally(() => {
        // this.sharedService.dismissLoading();
      });
  }

  logout() {
    resetStores();
    this.navCtrl.navigateRoot('home');
  }
}
