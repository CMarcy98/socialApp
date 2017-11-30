import { Injectable } from '@angular/core';
import { ApiCallService } from './core/api-call.service';
@Injectable()

export class LoginService {
	items;
	asset;
	constructor(public apiCall: ApiCallService ){
		this.items = {};
		this.asset = 'login';
	}

	get( item_id ){

	let promise = new Promise( (resolve, reject) => {

				if ( typeof this.items[item_id] == 'undefined' ){
				console.log(" Downloading from server ");
				//not set - download from server
				this.apiCall.get('/' + this.asset + '/', {id: item_id}).then(
				  (result) => {
				    this.items[item_id] = result.data.items[0];
				    resolve( this.items[item_id] );
				  }
				);
				} else {
				console.log(" Retrived from cache ")
				resolve( this.items[item_id] );
				}

	});

	return promise;
	}


	post( data ) {
		//this.apiCall.post(lift_name);
		let promise = new Promise( (resolve, reject) => {

		    this.apiCall.post('/' + this.asset + '/', data).then(
		    	(result:any) => {

				console.log(result);
				resolve(result.data.username);
				}
			);


			});

			return promise;
	}

};
