import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FeedItemService } from '../../services/feed_item.service';


@Component({
  selector: 'feed-page',
  templateUrl: 'feed.html'
})
export class FeedPage {
	feedItems;

  constructor(public navCtrl: NavController, public feeds: FeedItemService) {
	  this.feedItems = [];
  }

  ngOnInit() {

	  this.feeds.getAll({}).then(
	  	(feedItems) => {
			console.log("Everything is ", feedItems);
			this.feedItems = feedItems;
	  	}
	  );

  }



}
