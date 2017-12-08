import { Component } from '@angular/core';

import { FeedPage } from '../feed/feed';
import { ContactPage } from '../contact/contact';
import { FriendRequestPage } from '../friend_request/friend_request';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FeedPage;
  tab2Root = FriendRequestPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
