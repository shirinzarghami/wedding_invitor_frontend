import { Guest } from './Guest';
import { Injectable } from '@angular/core';
import {HttpClientModule, } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeddingInviterService {

  constructor(private http: HttpClient) { }
  saveForm(gustInfo: Guest) {
    return this.http.post('/api/developers/add', gustInfo).toPromise()
    .then(this.extractData)
          .catch(this.handleErrorPromise);
}		
private extractData(res: Response) {
  let body = res.json();
return body || {};
}
private handleErrorObservable (error: Response | any) {
console.error(error.message || error);
return Observable.throw(error.message || error);
}
private handleErrorPromise (error: Response | any) {
console.error(error.message || error);
return Promise.reject(error.message || error);
}	

  }