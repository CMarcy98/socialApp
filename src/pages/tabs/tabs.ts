import { Component } from '@angular/core';

import { FeedPage } from '../feed/feed';
import { ContactPage } from '../contact/contact';
import { FriendRequestPage } from '../friend_request/friend_request';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FeedPage;
  tab2Root = FriendRequestPage;
  tab3Root = ContactPage;
  tab4Root = HomePage;

  constructor() {

  }
}
