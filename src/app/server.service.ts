import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Headers} from '@angular/http';

@Injectable()
export class ServerService {

  constructor(private http: HttpClient) {
  }

  storeservers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('https://http-8afc5.firebaseio.com/data.json', servers,
      {headers: headers});
  }
}