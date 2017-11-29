import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class ApiCallService {
  readonly POST = 0;
  readonly GET = 1;
  readonly PUT = 2;


  readonly api_url = 'http://localhost/fitTracker_API';

  queue = [];

  constructor(private http: Http){

  }
  queueRequest = function(request){ this.queue.push(request); };

  fireQueue(){
    this.queue.forEach((apiCall, index) => {
      this.execute(apiCall.method, apiCall.url, apiCall.data).subscribe(
        (data) => {
          apiCall.resolve(data);
        }
      );

      if (index == (this.queue.length-1)){ this.queue.length = 0; }
    });
  };

  serialize(obj) {
    let str = [];
    for(let p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
    return str.join("&");
  };

  handleAuthError(code, request){
    switch(code){

    }
  };


post(asset, data){ return this.execute(this.POST, asset, data); };
put(url, data){ return this.execute(this.PUT, url, data); };
get(url, data){ return this.execute(this.GET, url, data); };


/*
Method execute
  @param method: takes POST, PUT, GET
  @param url: url the extension after the API URL
  @param data: Javascript Object that holds any values being sent to the server.

  @return a promise

  Notes: This function can be used in such a way:
    ApiCall.execute( POST , '/occupancy_area', {}).then(function(data){});
 */
execute(method, url, data){
  if (url[0] !== '/')
    url = "/" + url;
  else {
    url = url;
  }
  let headers = new Headers();

  headers.append('Content-Type', 'application/json');

  let request = {
    method: method,
    data: data,
    url: url,
    headers: headers,
    promise: null,
    resolve: null
  };


  request.promise = new Promise(function(resolve, reject){
    request.resolve = resolve;
  });

  switch(method){
    case this.POST:
    this.http.post(this.api_url + request.url, request.data, {headers: request.headers}).map(
      (res) => res.json()
    ).subscribe(
      (data) => {
        let apiResponse = data;
        if (apiResponse.auth_status.code){ this.handleAuthError(apiResponse.auth_status.code, request); }
        else
        { request.resolve(apiResponse.response); }
      }
    );
    break;
    case this.PUT:
      this.http.put(this.api_url + request.url, request.data, {headers: request.headers}).map(
        (res) => res.json()
      ).subscribe(
        (data) => {
          let apiResponse = data;
          if (apiResponse.auth_status.code){ this.handleAuthError(apiResponse.auth_status.code, request); }
          else
          { request.resolve(apiResponse.response); }
        }
      );
    break;
  case this.GET:
    this.http.get(this.api_url + request.url + this.transformRequest(request.data), {headers: request.headers}).map(
      (res) => res.json()
    ).subscribe(
      (data) => {
        let apiResponse = data;
        if (apiResponse.auth_status.code){ this.handleAuthError(apiResponse.auth_status.code, request); }
        else
        { request.resolve(apiResponse.response); }
      }
    );
    break;
  }
  return request.promise;
};

  transformRequest(data) {
    if (data == null){
      return "";
    }
    let str = [];
    for(let p in data)
    {
      if (typeof data[p] == 'object'){
        data[p] = JSON.stringify(data[p]);
      }
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
    }
    var returnString = "?" + str.join("&");
    return returnString;
  };



 };
