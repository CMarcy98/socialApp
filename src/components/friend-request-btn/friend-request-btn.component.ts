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
	items;
	loading;
	user;
	text;

	constructor(public users: UserService, public requests: FriendRequestService) {
		this.loading = true;
		this.text = "Accept";
		this.items = [];
	}

	ngOnInit() {
		let data = {
			other_id: this.user_id,
			my_id: localStorage.getItem("user_id")
		};

		this.requests.getAll(data).then(
			(item) => {
				console.log("Item returned is ", item);
				// if(item != undefined) {
				// 	if(item.length == 0) {
				// 		console.log("Not friends with ", data.other_id);
				// 	} else if(!item.accepted) {
				// 		console.log("Pending friend request", data.other_id);
				// 	} else {
				// 		console.log("Friends already with ", data.other_id);
				// 	}
				// }

				//console.log(item);
			}
		);
		// console.log(data.user_2);
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
