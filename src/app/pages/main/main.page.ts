import { Component, OnInit } from '@angular/core';

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
      title: 'Events',
      icon: 'calendar-outline',
      img: 'https://d3vlf99qeg6bpx.cloudfront.net/content/uploads/2021/08/21162129/Jack.Grealish.Man_.City_.v.Norwich.2021.TEAMtalk1-469x245.jpg',
    },
    {
      title: 'More',
      icon: 'add',
      img: 'https://static.standard.co.uk/2021/08/14/14/newFile.jpg?width=968&auto=webp&quality=75&crop=968%3A645%2Csmart',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
