import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FriendRequestService } from '../../services/friend_request.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	loading;
	requestItems;

	constructor(public requests: FriendRequestService, public navCtrl: NavController, public navParams: NavParams) {
		this.requestItems = [];
		this.loading = true;
	}

	ngOnInit(){
		let data = {
			id: localStorage.getItem("user_id")
		};
      this.requests.getAll(data).then(
        (requests) => {
          this.requestItems = requests;
		  console.log(requests);
        }
      );

	  this.loading = false;
    }



}
