import { Component, OnInit } from '@angular/core';
import { UserQuery, UserService } from 'src/app/stores/user';
import { LikedService, LikedQuery } from 'src/app/stores/liked';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  userProfile: any;
  username: any;
  image: any;
  liked: any;

  constructor(
    public userQuery: UserQuery,
    public likedService: LikedService,
    private likedQuery: LikedQuery,
    private userService: UserService,
    ) {}

    async ngOnInit() {
      this.image = this.userQuery.getValue().data.userImageUrl;
      this.userProfile = this.userQuery.getValue().data;
      this.username = this.userQuery.getValue().username;
      // this.liked = this.likedService.getList(this.userQuery.getValue().data.userUniqueId.length);
      // console.log(this.liked)
    }

  logout() {
    this.userService.logout();
  }
}
