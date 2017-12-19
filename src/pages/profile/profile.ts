import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'profile-Page',
  templateUrl: 'profile.html'
})

export class ProfilePage {
	loading;
	user;

  constructor(public navCtrl: NavController, public users: UserService) {
	  this.loading = true;
	  this.user= {};
  }

  ngOnInit() {

	  this.users.get(localStorage.getItem('user_id')).then(
	  	(user) => {
			console.log("The user retrieved is", user);
			this.user = user;
			this.loading = false;
			console.log("The user after the API call is now", this.user);
		}
	  );


  }

}
