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
    let type = result.type === 'blog';
    let typeId = result.typeId;
    if (type) {
      this.blogQuery.selectEntity(typeId).subscribe((blogResult) => {
        this.navCtrl.navigateForward('blog-details', {
          state: { blog:blogResult}
        })
        return;
      })
    } else {
      this.navCtrl.navigateForward('activity-details', {
        state: { activity:result }
      })
    } return;
  }
}
