import { Component, Input, OnInit } from '@angular/core';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-profile-details-header',
  templateUrl: './profile-details-header.component.html',
  styleUrls: ['./profile-details-header.component.scss'],
})
export class ProfileDetailsHeaderComponent implements OnInit {
  @Input() profile: any;

  constructor() {}

  ngOnInit() {}

  async share() {
    await Share.share({
      title: 'See cool stuff from Paarl',
      text: 'Really awesome thing you need to see right meow',
      url: 'https://nomadicways.travel/',
      dialogTitle: 'Share with buddies',
    });
  }
}
