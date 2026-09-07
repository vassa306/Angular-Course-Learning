import { Component } from '@angular/core';
import { USERS } from 'src/db-users';
import { OnInit } from '@angular/core';

@Component({
  selector: 'user-profile',
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent implements OnInit {
  users = USERS;
  currentUser = this.users[0];

  ngOnInit(): void {
    console.log(this.currentUser);
  }
}
