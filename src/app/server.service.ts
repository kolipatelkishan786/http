import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ServerService {

  constructor(private http: HttpClient) {
  }

  storeservers(servers: any[]) {
    return this.http.post('https://http-8afc5.firebaseio.com/data.json', servers);
  }
}
