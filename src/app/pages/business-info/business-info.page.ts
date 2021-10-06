import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicSwiper } from '@ionic/core';
import SwiperCore from 'swiper';

SwiperCore.use([IonicSwiper]);

@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.page.html',
  styleUrls: ['./business-info.page.scss'],
})
export class BusinessInfoPage implements OnInit {
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
  profile: any;

  constructor(private router: Router) {}

  ngOnInit() {
    const { state } = this.router.getCurrentNavigation().extras;
    this.profile = state.profile;
  }
}
