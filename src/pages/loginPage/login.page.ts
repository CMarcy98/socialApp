import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginService } from '../../services/login.service';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'login-Page',
  templateUrl: 'login.page.html'
})
export class LoginPage implements OnInit {
  first;
  last;

  constructor(public navCtrl: NavController, public logins: LoginService) {
    this.first = "";
    this.last = "";
  }

  ngOnInit(){
        localStorage.clear();
  }

  login(first, last){
    this.logins.get(first,last).then(
      (result) => {
		  if(result.data.items.length == 0) {
			  alert("User is not in system.");
		  } else {
			  console.log("result is ", result);
	  		  localStorage.setItem('user_id', result.data.items[0].id);
	          console.log("User id is ", localStorage.getItem('user_id'));
	          this.navCtrl.push(TabsPage);
		  }

      }
      // localStorage.setItem('user_id', result[0]);
    );
  }

}
