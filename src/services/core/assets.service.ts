import { Injectable } from '@angular/core';
import { ApiCallService } from './api-call.service';
@Injectable()

export class AssetsService {

  constructor(public apiCall: ApiCallService ){

  }

  get( items, asset, item_id ){

    let promise = new Promise( (resolve, reject) => {

              if ( typeof items[item_id] == 'undefined' ){
                console.log(" Downloading from server ");
                //not set - download from server
                this.apiCall.get('/' + asset + '/', {id: item_id}).then(
                  (result) => {
                    items[item_id] = result.data.items[0];
                    resolve( items[item_id] );
                  }
                );
              } else {
                console.log(" Retrived from cache ")
                resolve( items[item_id] );
              }

    });

    return promise;
  }




  getAll( items, asset ){

    let promise = new Promise( (resolve, reject) => {

        this.apiCall.get('/' + asset + '/', {}).then(
          (result) => {

            let returnArr = [];

            result.data.items.forEach( (lift) => {
              items[lift.id] = lift;
              returnArr.push(lift);
            });
            resolve(returnArr);
          }
        );


    });

    return promise;
  }

 };