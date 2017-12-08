import { Injectable } from '@angular/core';
import { AssetsService } from './core/assets.service';
import { ApiCallService } from './core/api-call.service';
@Injectable()

export class LoginService {
	items;
	asset;

	constructor(public assets: AssetsService, public apiCall: ApiCallService ){
      this.items = {};
      this.asset = 'login';
    }

    get( first_name, last_name ){
		let data = {
			first_name: first_name,
			last_name: last_name
		};
		return this.apiCall.get(this.asset + "/", data);
    }

    getAll( ){
      //return this.assets.getAll( this.items, this.asset );
    }
};
