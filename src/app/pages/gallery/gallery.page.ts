import { Component, OnInit } from '@angular/core';
import { PhotoQuery, PhotoService } from 'src/app/stores/photo';
import { BlogQuery, BlogService } from 'src/app/stores/blog';
import { EventQuery, EventService } from 'src/app/stores/event';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  photos: any;
  blogs: any;
  events: any;

  constructor(
    private photoService: PhotoService,
    private photoQuery: PhotoQuery,
    public blogQuery: BlogQuery,
    private blogService: BlogService,
    private eventService: EventService,
    private eventQuery: EventQuery,
  ) {
    this.photoQuery
    .selectAll({ filterBy: (entity) => entity?.uniqueId === 'tulbagh-tourism-tulbagh' })
    .subscribe((photos) => {
      this.photos = photos;
    });
    this.blogQuery
    .selectAll({ filterBy: (entity) => entity?.uniqueId === 'tulbagh-tourism-tulbagh' })
    .subscribe((blogs) => (this.blogs = blogs));

    this.eventQuery
      .selectAll({ filterBy: (entity) => entity?.uniqueId === 'tulbagh-tourism-tulbagh' })
      .subscribe((events) => (this.events = events));

      console.log(this.photos);
  }

  ngOnInit() {
  }

}
