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
  ) {
    this.userStore.setLoading(false);
  }

  async login(username, password) {
    this.userStore.setLoading(true);
    const ha1 = Md5.hashStr(
      `${username}:${environment.realm}:${password}`
    ).toString();
    this.userStore.update({ username, ha1 });
    return await this.http
      .request('GET', 'site', { format: 'json' })
      .then((result) => {
        console.log(result);
        const { status, objectList } = result[0];
        if (status.code === 0) {
          resetStores({ exclude: ['user'] });
          const data = objectList[0];
          this.userStore.update({ data });
          return true;
        }
        return false;
      })
      .catch((error) => {
        this.userStore.reset();
        return false;
      })
      .finally(() => {
        this.userStore.setLoading(false);
      });
  }

  logout() {
    resetStores();
    this.navCtrl.navigateRoot('');
  }
}
