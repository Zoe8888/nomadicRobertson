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
    },
    {
      title: 'Gallery',
      icon: 'images-outline',
    },
    {
      title: 'Events',
      icon: 'calendar-outline',
    },
    {
      title: 'More',
      icon: 'add',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
