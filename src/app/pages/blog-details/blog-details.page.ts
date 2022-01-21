import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { BlogQuery, BlogService } from 'src/app/stores/blog';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.page.html',
  styleUrls: ['./blog-details.page.scss'],
})
export class BlogDetailsPage implements OnInit {
  blog: any;

  constructor(
    private router: Router,
    private blogService: BlogService,
    public blogQuery: BlogQuery,
    public sanitizer: DomSanitizer
  ) {this.anything()}

  async ngOnInit() {

  }

  async anything() {
    const { state } = this.router.getCurrentNavigation().extras;
    this.blog = state.blog;
    console.log(state)
    await this.blogService.getBlog(this.blog.id);
    console.log(this.blog.id);
    this.blogQuery
    .selectEntity(this.blog.id)
    .subscribe((blog) => {
      if (blog) {
        this.blog = blog
      }
    });
  }
}
