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

	constructor(public users: UserService) {
		this.loading = true;
	}

	ngOnInit() {
		this.users.get(this.user_id).then(
			(user) => {
				this.user = user;
				this.loading = false;
				console.log("User retrieved", user);
			}
		);
	}

}
