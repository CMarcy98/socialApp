import { Component } from '@angular/core';

import { FeedPage } from '../feed/feed';
import { ContactPage } from '../contact/contact';
import { FriendRequestPage } from '../friend_request/friend_request';
import { ProfilePage } from '../profile/profile';
import { AddPage } from '../add/add';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FeedPage;
  tab2Root = FriendRequestPage;
  tab3Root = ContactPage;
  tab4Root = ProfilePage;
  tab5Root = AddPage;

  constructor() {

  }
}
