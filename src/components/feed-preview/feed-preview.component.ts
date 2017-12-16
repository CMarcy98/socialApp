import { Component, OnInit , Input} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FeedItemService } from '../../services/feed_item.service';



@Component({
  selector: 'feed-preview',
  templateUrl: 'feed-preview.component.html'
})

export class FeedPreviewComponent {
	@Input('type-id') type_id;
	@Input('object-id') object_id;

	constructor() {

	}

	ngOnInit() {

	}

}
