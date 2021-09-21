import { Component, OnInit } from '@angular/core';
import { LikedQuery, LikedService } from 'src/app/stores/liked';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.page.html',
  styleUrls: ['./liked.page.scss'],
})
export class LikedPage implements OnInit {
  constructor(
    private likedService: LikedService,
    public likedQuery: LikedQuery
  ) {}

  async ngOnInit() {
    await this.likedService.getList();
  }
}
