import { Injectable } from '@angular/core';
import { AssetsService } from './core/assets.service';
@Injectable()

export class FeedImageService {
  items;
  asset;

  constructor(public assets: AssetsService ){
    this.items = {};
    this.asset = 'feed_image';
  }

  config(item){
	  let promise = new Promise( (resolve, reject) => {
		  /* Do your code here */
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

 };
