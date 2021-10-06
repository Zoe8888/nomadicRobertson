import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.page.html',
  styleUrls: ['./blog-details.page.scss'],
})
export class BlogDetailsPage implements OnInit {
  profile: any;

  constructor(private router: Router) {}

  ngOnInit() {
    const { state } = this.router.getCurrentNavigation().extras;
    console.log(state);
    this.profile = state.profile;
  }
}
