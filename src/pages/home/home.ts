import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ApiCallService } from '../../services/core/api-call.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	

	constructor(private apiCall: ApiCallService, public users: UserService, public navCtrl: NavController, public navParams: NavParams) {

	}

}
