import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NavController } from '@ionic/angular';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnChanges {
  @ViewChild('blogSlides', { static: false }) blogSlides: any;
  @ViewChild('eventSlides', { static: false }) eventSlides: any;
  @ViewChild('photoSlides', { static: false }) photoSlides: any;
  @Input() blogs: any[];
  @Input() events: any[];
  @Input() photos: any[];
  album: any[] = [];

  constructor(
    private navCtrl: NavController,
    private lightbox: Lightbox,
    private lightboxConfig: LightboxConfig
  ) {
    this.lightboxConfig.centerVertically = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.photos?.currentValue) {
      changes?.photos?.currentValue.forEach((photo) => {
        const album = {
          src: photo?.largeImageUrl,
          thumb: photo?.mediumImageUrl,
        };

        this.album.push(album);
      });
    }
  }

  onChange(ev: any) {
    const { value } = ev.detail;

    if (value === 'blog') {
      setTimeout(() => this.blogSlides.swiperRef.update(), 100);
    } else if (value === 'event') {
      setTimeout(() => this.eventSlides.swiperRef.update(), 100);
    } else if (value === 'gallery') {
      setTimeout(() => this.photoSlides.swiperRef.update(), 100);
    }
  }

  goToEvent(event) {
    this.navCtrl.navigateForward('event-details', {
      state: { event },
    });
  }

  expandImg(i: number): void {
    this.lightbox.open(this.album, i);
  }
}
