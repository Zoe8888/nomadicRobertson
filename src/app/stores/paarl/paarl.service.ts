import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';
import { PaarlQuery } from './paarl.query';
import { PaarlStore } from './paarl.store';

@Injectable({ providedIn: 'root' })
export class PaarlService {
  constructor(
    private paarlStore: PaarlStore,
    private http: HttpService,
    private paarlQuery: PaarlQuery
  ) {}

  async getAbout() {
    return await this.http
      .request('GET', 'wiki', {
        profile: 'paarl-paarl',
        subject: 'About Paarl',
        format: 'json',
      })
      .then((result) => {
        if (result[0]?.objectList?.length > 0) {
          this.paarlStore.update({ about: result[0].objectList[0] });
        }
      });
  }

  async showAbout() {
    await this.getAbout();
    const { about }: any = this.paarlQuery.getValue();
    Swal.fire({
      title: 'About Paarl',
      html: about?.html,
      background: 'var(--ion-color-primary)',
      customClass: {
        htmlContainer: '!text-left !text-sm !text-white',
        title: '!text-white',
      },
      showClass: {
        backdrop: 'swal2-noanimation',
        popup: 'swal2-noanimation',
      },
      showConfirmButton: false,
      showCloseButton: true,
      backdrop: true,
      heightAuto: false,
      allowOutsideClick: false,
    });
  }
}
