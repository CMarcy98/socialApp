import { Injectable } from '@angular/core';
import { ApiCallService } from './api-call.service';
@Injectable()

export class AssetsService {

  constructor(public apiCall: ApiCallService ){

  }

  get( items, asset, item_id, config ){

    let promise = new Promise( (resolve, reject) => {

              if ( typeof items[item_id] == 'undefined' ){
                console.log(" Downloading from server ");
                //not set - download from server
                this.apiCall.get('/' + asset + '/', {id: item_id}).then(
                  (result) => {
					  // console.log(result);
					  config(result.data.items[0]).then(
						  (item)=>{
			                    items[item_id] = item;
			                    resolve( item );
						  });
                  	}
                );
              } else {
                console.log(" Retrived from cache ")
                resolve( items[item_id] );
              }

    });


    return promise;
  }




  getAll( items, asset, data, config ){

    let promise = new Promise( (resolve, reject) => {

        this.apiCall.get('/' + asset + '/', data).then(
          (result) => {

            let returnArr = [];

            result.data.items.forEach( (item) => {

				config(item).then((result_item)=>{
	              items[item.id] = result_item;
				});
              returnArr.push(item);
            });
            resolve(returnArr);
          }
        );


    });

    return promise;
  }

  put ( asset, data ) {
        return  this.apiCall.put('/' + asset + '/', data);
  }

 };
