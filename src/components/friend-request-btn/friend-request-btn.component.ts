import { Component, OnInit , Input} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// import { AssetsService } from '../../services/core/assets.service';
import { UserService } from '../../services/user.service';
import { FriendRequestService } from '../../services/friend_request.service';


@Component({
  selector: 'friend-request-btn',
  templateUrl: 'friend-request-btn.component.html'
})

export class FriendRequestBtnComponent {
	@Input('user-id') user_id;
	loading;
	user;
	text;

	constructor(public users: UserService, public requests: FriendRequestService) {
		this.loading = true;
		this.text = "Accept";
	}

	ngOnInit() {

    }


	// Updates is_friend field in friendrequest table
	acceptRequest() {
		//alert("Accecpted friend request!");
		let data = {
			user_1: localStorage.getItem("user_id"),
			user_2: this.user_id,
			is_friend: 1
		}

		console.log("I am ", localStorage.getItem("user_id"));
		console.log("I am requesting ", this.user_id);

		this.requests.put(data).then(
			(result) => {
				console.log("Result of accept request: ", result);
				this.text = "Accepted!";
			}
		);
	}



}
