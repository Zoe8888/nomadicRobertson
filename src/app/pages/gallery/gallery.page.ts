import { Component, OnInit } from '@angular/core';
import { PhotoQuery, PhotoService } from 'src/app/stores/photo';
import { BlogQuery, BlogService } from 'src/app/stores/blog';
import { Router } from '@angular/router';
import { ProfileQuery, ProfileService } from 'src/app/stores/profile';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  photos: any;
  blogs: any;
  events: any;
  profile: any;

  constructor(
    private photoService: PhotoService,
    private photoQuery: PhotoQuery,
    public blogQuery: BlogQuery,
    private router: Router,
    private profileService: ProfileService,
    private profileQuery: ProfileQuery

  ) {
    // this.photoQuery
    // .selectAll({ filterBy: (entity) => entity?.uniqueId === 'tulbagh-tourism-tulbagh' })
    // .subscribe((photos) => {
    //   this.photos = photos;
    // });
  }

  // ngOnInit() {
  // }

  async ngOnInit() {
    const { state } = this.router.getCurrentNavigation().extras;
    this.profile = state.profile;
    console.log(state.profile);

    await this.profileService.getInfo(state.profile.uniqueId);
    console.log(state.profile.uniqueId)

    this.photoQuery
    .selectAll({ filterBy: (entity) => entity?.uniqueId === this.profile.uniqueId })
    .subscribe((photos) => (this.photos = photos));

    console.log(this.photos);
  }

  async ionViewWillEnter() {
    await this.photoService.getPhotoList(this.profile.uniqueId);
  }

}
