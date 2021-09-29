import { Component } from '@angular/core';
import { UserQuery } from './stores/user';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menu = [
    {
      title: 'Profile',
      path: '',
      icon: 'person',
    },
    {
      title: 'Settings',
      path: '',
      icon: 'settings',
    },
  ];
  constructor(public userQuery: UserQuery) {}
}
