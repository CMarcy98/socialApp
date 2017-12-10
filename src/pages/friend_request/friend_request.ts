import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'page-friend_request',
  templateUrl: 'friend_request.html'
})

export class FriendRequestPage {
	loading;
	users;
	id;

	constructor(public usersService: UserService, public navCtrl: NavController, public navParams: NavParams) {
		this.users = [];
		this.loading = true;
		this.id = localStorage.getItem("user_id");
	}

	ngOnInit(){
		let data = {
			my_id: localStorage.getItem("user_id"),
			not_me: true,
			is_friend: 0
		};

      this.usersService.getAll(data).then(
        (users) => {
			console.log(users);
			this.users = users;
        }
      );

	  this.loading = false;
    }



}
