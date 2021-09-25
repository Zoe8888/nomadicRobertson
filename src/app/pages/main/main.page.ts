import { Component, OnInit } from '@angular/core';
import { IonicSwiper } from '@ionic/core';
import { PaarlQuery, PaarlService } from 'src/app/stores/paarl';
import Swal from 'sweetalert2';
import SwiperCore from 'swiper';

SwiperCore.use([IonicSwiper]);

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  constructor(
    private paarlQuery: PaarlQuery,
    private paarlService: PaarlService
  ) {}

  async ngOnInit() {
    await this.paarlService.getAbout();
  }

  async showAbout() {
    const about: any = this.paarlQuery.getValue().about;
    Swal.fire({
      title: 'About Paarl',
      html: about?.html,
      showConfirmButton: false,
      showCloseButton: true,
      backdrop: true,
      heightAuto: false,
      allowOutsideClick: false,
    });
  }
}
