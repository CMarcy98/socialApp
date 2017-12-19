import { Component, OnInit , Input} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FeedImageService } from '../../services/feed_image.service';



@Component({
  selector: 'feed-image-preview',
  templateUrl: 'feed-image-preview.component.html'
})

export class FeedImagePreviewComponent {
	@Input('object-id') object_id;
	image;
	loading;

	constructor(public images: FeedImageService) {
		this.loading = true;
		this.image = {};
	}

	ngOnInit() {

		this.images.get(this.object_id).then(
          (item) => {
			  this.image = item.pic_url;
			  this.loading = false;
          }
        );

	}

}
