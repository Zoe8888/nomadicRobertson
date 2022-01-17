import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BlogQuery } from 'src/app/stores/blog';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.scss'],
})
export class ActivityItemComponent implements OnInit {
  @Input() activity: any;
  @Input() color: any;

  constructor(
    private navCtrl: NavController,
    private blogQuery: BlogQuery
    ) {}

  ngOnInit() {}

  getType(result) {
    const type = result.type === 'blog';
    const typeId = result.typeId;
    if (type) {
      const blogResult = this.blogQuery.getEntity(typeId)
      this.navCtrl.navigateForward('blog-details', {
        state: { blog:blogResult}
      })
    } else {
      this.navCtrl.navigateForward('activity-details', {
        state: { activity:result }
      })
    }
  }
}
