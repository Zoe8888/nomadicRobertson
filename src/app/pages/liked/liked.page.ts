import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController, AlertController } from '@ionic/angular';
import { LikedQuery, LikedService } from 'src/app/stores/liked';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.page.html',
  styleUrls: ['./liked.page.scss'],
})
export class LikedPage implements OnInit {
  filteredList: Array<any> = [];
  likedList: any;
  sortList: Array<any> = [];

  constructor(
    private likedService: LikedService,
    public likedQuery: LikedQuery,
    private navCtrl: NavController,
    private popOverController: PopoverController,
    public alertCtrl: AlertController,
  ) {}

  ngOnInit() {
    this.likedList = this.likedQuery.getAll();
  }

  ionViewWillEnter() {
    this.likedService.getList();
  }

  goTo(profile) {
    this.navCtrl.navigateForward('business-info', {
      state: { profile },
    });
  }

  async popFilter(event) {
    const alert =  await this.alertCtrl.create({
      inputs: [
        {
          type: 'checkbox',
          label: 'Accommodations',
          value: 'Accommodation',
        },
        {
          type: 'checkbox',
          label: 'Wineries',
          value: 'Winery'
        },
        {
          type: 'checkbox',
          label: 'Wedding Venues',
          value: 'Weddings'
        },
        {
          type: 'checkbox',
          label: 'Food & Dining',
          value: 'Food & Dining'
        },
        {
          type: 'checkbox',
          label: 'Other',
          value: 'Other'
        }
      ],
      buttons:[
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Okay',
          handler: data => {
            if (this.filteredList.length > 0){
              this.filteredList = [];
            }
            data.forEach(selectedValue => {
              if (this.likedList.length > 0){
                this.likedList = this.likedQuery.getAll();
              }
              const found = this.likedList.filter((profile) =>
                profile?.subcategory.includes(selectedValue)
              );
              found.forEach(objectList => {
                this.filteredList.push(objectList);
              });
            });
            this.likedList = this.filteredList;
          }
        }
      ]
    });
    await alert.present();
  }

  async popSort(event) {
    const alert =  await this.alertCtrl.create({
      inputs: [
        {
          type: 'checkbox',
          label: 'Alphabetical',
          value: 'Alphabetical',
        },
        {
          type: 'checkbox',
          label: 'Distance',
          value: 'Distance'
        },
      ],
      buttons:[
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Okay',
          handler: data => {
              if (data[0] === 'Distance'){
                this.sortList = this.likedList.sort((a, b) => (a.distanceKm > b.distanceKm) ? 1 : -1);
              }
              else{
                this.sortList = this.likedList.sort((a, b) => (a.title > b.title) ? 1 : -1);
              }
              this.likedList = this.sortList;
            }
          }
      ]
    });
    await alert.present();
  }
}
