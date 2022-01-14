import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { RobertsonStore } from './robertson.store';
import { RobertsonQuery } from './robertson.query';
import Swal from 'sweetalert2';

@Injectable({ providedIn: 'root' })
export class RobertsonService {

  constructor(
    private robertsonStore: RobertsonStore,
    private robertsonQuery: RobertsonQuery,
    private http: HttpService,
    ) {
  }

  async getAbout() {
    return await this.http
      .request('GET', 'wiki', {
        profile: 'robertson-tourism-robertson',
        subject: 'About',
        format: 'json',
      })
      .then((result) => {
        if (result[0]?.objectList?.length > 0) {
          this.robertsonStore.update({ about: result[0].objectList[0] });
        }
      });
  }

  async getInfo() {
    return await this.http
      .request('GET', 'show', {
        uniqueId: 'robertson-tourism-robertson',
        format: 'json',
      })
      .then((result) => result[0]?.objectList[0]);
  }

  async showAbout() {
    await this.getAbout();
    const { about }: any = this.robertsonQuery.getValue();
    Swal.fire({
      title: 'About Robertson',
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
