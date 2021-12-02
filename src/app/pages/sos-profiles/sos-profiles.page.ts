import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/stores/profile';
import Swal from 'sweetalert2';

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

  async showDetails(profile) {
    await this.profileService.getWiki(profile).then((result) => {
      const doc = new DOMParser().parseFromString(result?.html, 'text/html');
      const phone = doc.getElementById('phone');
      const phoneNumber = phone?.innerHTML;
      let newPhone = `<a href="tel:${phoneNumber}">${phoneNumber}</a>`;
      if (phoneNumber.includes('/')) {
        const parts = phoneNumber.split('/');
        newPhone = parts
          .map((part) => `<a href="tel:${part}">${part}</a>`)
          .join(' <br/><br/> ');
      }
      // const address = doc.getElementById('address');
      // const location = address?.innerHTML;
      // let newAddress = `<div (click)="takeMeThere()">${location}</div>`;

      const html = phone
      ? result?.html.replace(phone?.outerHTML, newPhone)
      : result?.html;

      if (result?.html) {
        Swal.fire({
          html,
          showConfirmButton: false,
          showCloseButton: true,
          backdrop: true,
          heightAuto: false,
          allowOutsideClick: false,
        });
      }
    });
  }

  searchProfile(event) {
    const found = this.profiles.filter((profile) =>
      profile?.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    this.searchProfiles = found;
  }
}
