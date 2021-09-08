import { Component, OnInit } from '@angular/core';
import { PaarlQuery, PaarlService } from 'src/app/stores/paarl';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  sections = [
    {
      title: 'Blog',
      icon: 'chatbubble-ellipses-outline',
      img: 'https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0002/26/thumb_125393_default_news_size_5.jpeg',
    },
    {
      title: 'Gallery',
      icon: 'images-outline',
      img: 'https://e0.365dm.com/21/08/768x432/skysports-gareth-bale-real-madrid_5487312.jpg?20210822215245',
    },
    {
      title: 'More',
      icon: 'add',
      img: 'https://static.standard.co.uk/2021/08/14/14/newFile.jpg?width=968&auto=webp&quality=75&crop=968%3A645%2Csmart',
    },
  ];

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
      title: 'Your work has been saved',
      html: about?.html,
      showConfirmButton: false,
      showCloseButton: true,
      backdrop: true,
      heightAuto: false,
      allowOutsideClick: false,
    });
  }
}
