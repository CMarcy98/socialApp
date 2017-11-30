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
    this.first = "Christian";
    this.last = "Marcy";
  }

  ngOnInit(){
        localStorage.clear();
  }

  login(first, last){
    this.logins.get('/user/', {first_name: first, last_name: last}).then(
      (result) => {
        console.log("result", result);
        localStorage.setItem('user_id', result.data.items[0].id);
        console.log(localStorage.getItem('id'));
        this.navCtrl.push(TabsPage);
      }
      // localStorage.setItem('user_id', result[0]);
    );
  }

  newUser(first, last){
    this.apiCall.post('/user/', {first_name: first, last_name: last}).then(
      (result) =>{
        console.log("result", result);
      }
    );
  }

}
