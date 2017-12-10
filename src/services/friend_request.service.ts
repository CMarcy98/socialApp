import { Injectable } from '@angular/core';
import { AssetsService } from './core/assets.service';
@Injectable()

export class FriendRequestService {
	items;
	asset;

	constructor(public assets: AssetsService ){
      this.items = {};
      this.asset = 'friend_request';
    }

	config(item){
		let promise = new Promise( (resolve, reject) => {
			/* Do your code here */
			item.accepted = Boolean(Number(item.accepted));
			resolve(item);
		});
		return promise;
	}

    get( item_id ){
      return this.assets.get( this.items, this.asset, item_id, this.config );
    }

    getAll( data ){
      return this.assets.getAll( this.items, this.asset, data, this.config );
    }

	put( data ) {
		return this.assets.put(this.asset, data);
	}

};
