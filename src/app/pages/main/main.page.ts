import { Component, OnInit } from '@angular/core';
import { IonicSwiper } from '@ionic/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { BlogQuery, BlogService } from 'src/app/stores/blog';
import { EventQuery, EventService } from 'src/app/stores/event';
import { PaarlService } from 'src/app/stores/paarl';
import { PhotoQuery, PhotoService } from 'src/app/stores/photo';
import SwiperCore from 'swiper';

SwiperCore.use([IonicSwiper]);

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  blogs: any;
  events: any;
  photos: any;

  constructor(
    private paarlService: PaarlService,
    public blogQuery: BlogQuery,
    private blogService: BlogService,
    private eventService: EventService,
    private eventQuery: EventQuery,
    private photoService: PhotoService,
    private photoQuery: PhotoQuery
  ) {
    this.blogQuery
      .selectAll({ filterBy: (entity) => entity?.uniqueId === 'paarl-paarl' })
      .subscribe((blogs) => (this.blogs = blogs));

    this.eventQuery
      .selectAll({ filterBy: (entity) => entity?.uniqueId === 'paarl-paarl' })
      .subscribe((events) => (this.events = events));

    this.photoQuery
      .selectAll({ filterBy: (entity) => entity?.uniqueId === 'paarl-paarl' })
      .subscribe((photos) => {
        console.log(photos);
        this.photos = photos;
      });
  }

  ngOnInit() {}

  async ionViewWillEnter() {
    await this.paarlService.getAbout();
    await this.blogService.getList();
    await this.eventService.getList();
    await this.photoService.getPhotoList();
  }

  async showAbout() {
    await this.paarlService.showAbout();
  }
}
