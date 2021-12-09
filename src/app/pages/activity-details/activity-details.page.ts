import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ActivityQuery, ActivityService } from 'src/app/stores/activity';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.page.html',
  styleUrls: ['./activity-details.page.scss'],
})
export class ActivityDetailsPage implements OnInit {
  activity: any;

  constructor(
    private router: Router,
    private activityService: ActivityService,
    public activityQuery: ActivityQuery,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    const { state } = this.router.getCurrentNavigation().extras;
    this.activity = state.activity;
    this.activityService.getActivity(this.activity.id);
    this.activityQuery
      .selectEntity(this.activity.id)
      .subscribe((activity) => (this.activity = activity));
  }

}
