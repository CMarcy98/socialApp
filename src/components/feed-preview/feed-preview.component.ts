import { Component, OnInit , Input} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserService } from '../../services/user.service';



@Component({
  selector: 'feed-preview',
  templateUrl: 'feed-preview.component.html'
})

export class FeedPreviewComponent {
	@Input('type-id') type_id;
	@Input('object-id') object_id;
	@Input('user-id') user_id;
	user;
	loading;
	liked;

	constructor(public users: UserService) {
		this.loading = true;
		this.liked = false;
	}

	ngOnInit() {
		this.users.get(this.user_id).then(
			(user) => {
				this.user = user;
				this.loading = false;
				// console.log("User retrieved", user);
			}
		);
	}

	clickLike() {
		console.log("Before click,", this.liked);
		this.liked = !this.liked;
		console.log("After click", this.liked);


		// document.getElementById('heart').toggleClass("clicked");
		// $("#heart").toggleClass( "clicked" );

		// if(this.liked) {
		// 	console.log("Add class to it");
		// 	$('#heart').addClass( clicked );
		// } else {
		// 	console.log("Remove class from it");
		// 	$('#heart').removeClass( clicked );
		// }

	}

}
