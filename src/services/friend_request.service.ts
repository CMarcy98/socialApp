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

    get( item_id ){
      return this.assets.get( this.items, this.asset, item_id );
    }

    getAll( data ){
      return this.assets.getAll( this.items, this.asset, data );
    }

	// constructor(public apiCall: ApiCallService ){
	// 	this.items = {};
	// 	this.asset = 'login';
	// }

	// get( item_id ){
    //
	// let promise = new Promise( (resolve, reject) => {
    //
	// 			if ( typeof this.items[item_id] == 'undefined' ){
	// 			console.log(" Downloading from server ");
	// 			//not set - download from server
	// 			this.apiCall.get('/' + this.asset + '/', {id: item_id}).then(
	// 			  (result) => {
	// 			    this.items[item_id] = result.data.items[0];
	// 			    resolve( this.items[item_id] );
	// 			  }
	// 			);
	// 			} else {
	// 			console.log(" Retrived from cache ")
	// 			resolve( this.items[item_id] );
	// 			}
    //
	// });
    //
	// return promise;
	// }
    //
    //
	// post( data ) {
	// 	//this.apiCall.post(lift_name);
	// 	let promise = new Promise( (resolve, reject) => {
    //
	// 	    this.apiCall.post('/' + this.asset + '/', data).then(
	// 	    	(result:any) => {
    //
	// 			console.log(result);
	// 			resolve(result.data.username);
	// 			}
	// 		);
    //
    //
	// 		});
    //
	// 		return promise;
	// }

};
