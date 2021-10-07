import { Component, OnInit } from '@angular/core';
import { IonicSwiper } from '@ionic/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { BlogQuery, BlogService } from 'src/app/stores/blog';
import { PaarlService } from 'src/app/stores/paarl';
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

  constructor(
    private paarlService: PaarlService,
    public blogQuery: BlogQuery,
    private blogService: BlogService
  ) {
    this.blogQuery
      .selectAll({ filterBy: (entity) => entity.uniqueId === 'paarl-paarl' })
      .subscribe((blogs) => (this.blogs = blogs));
  }

  async ngOnInit() {
    await this.paarlService.getAbout();
    await this.blogService.getList();
  }

  async showAbout() {
    await this.paarlService.showAbout();
  }
}
