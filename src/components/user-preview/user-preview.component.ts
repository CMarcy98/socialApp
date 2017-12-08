import { Component, OnInit , Input} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AssetsService } from '../../services/core/assets.service';
import { UserService } from '../../services/user.service';
import { FriendRequestService } from '../../services/friend_request.service';


@Component({
  selector: 'user-preview',
  templateUrl: 'user-preview.component.html'
})

export class UserPreviewComponent {
	@Input('user-id') user_id;
	loading;
	user;

	constructor(public users: UserService, public requests: FriendRequestService) {
		this.loading = true;
	}

	ngOnInit() {

		this.users.get(this.user_id).then(
          (user) => {
			console.log(user);
            this.user = user;
			this.loading = false;
  		  //console.log(requests);
          }
        );
    }
}
