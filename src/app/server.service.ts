import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class ServerService {

  constructor(private http: HttpClient) {
  }

  storeservers(servers: any[]) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    // return this.http.post('https://http-8afc5.firebaseio.com/data.json', servers,
    //   {headers: headers});
    return this.http.put('https://http-8afc5.firebaseio.com/data.json', servers,
      {headers: headers});
  }

  getServers() {
    return this.http.get('https://http-8afc5.firebaseio.com/data')
      .map(
        (response: any) => {
          const data = response.json();
          for (const server of data) {
            server.name = 'FETCHED' + server.name;
          }
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw(error);
        }
      );
  }

  getAppName() {
    return this.http.get('https://http-8afc5.firebaseio.com/appName.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
