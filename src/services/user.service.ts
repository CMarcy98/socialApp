import { Injectable } from '@angular/core';
import { AssetsService } from './core/assets.service';
@Injectable()

export class UserService {
  items;
  asset;
  
  constructor(public assets: AssetsService ){
    this.items = {};
    this.asset = 'users';
  }

  get( item_id ){
    return this.assets.get( this.items, this.asset, item_id );
  }

  getAll( ){
    return this.assets.getAll( this.items, this.asset );
  }

 };
