import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.scss'],
})
export class ActivityItemComponent implements OnInit {
  @Input() activity: any;
  @Input() blog: any;
  @Input() color: any;
  type : any;

  constructor(
    private navCtrl: NavController,
    ) {}

  ngOnInit() {}

  findType(result) {
      let type = result.type === 'blog';
      if (type) {
          this.navCtrl.navigateForward('blog-details', {
            state: { blog:result }
          })
      } else {
          this.navCtrl.navigateForward('activity-details', {
            state: { activity:result }
          })
      }
  }
}
