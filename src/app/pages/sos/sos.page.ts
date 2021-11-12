import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfileService } from 'src/app/stores/profile';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sos',
  templateUrl: './sos.page.html',
  styleUrls: ['./sos.page.scss'],
})
export class SosPage implements OnInit {
  list: any[];

  constructor(
    private modalCtrl: ModalController,
    private profileService: ProfileService
  ) {}

  async ngOnInit() {
    console.log(this.profileService.getList('SOS'));
    await this.profileService.getList('SOS').then((result) => {
      this.list = result?.[0].objectList;
    });
  }

  async showDetails(profile) {
    await this.profileService.getWiki(profile).then((result) => {
      if (result?.html) {
        Swal.fire({
          html: result?.html,
          showConfirmButton: false,
          showCloseButton: true,
          backdrop: true,
          heightAuto: false,
          allowOutsideClick: false,
        });
      }
    });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  call(phone) {
    window.open(`tel:${phone}`, '_system');
  }
}
