import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

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
    return this.http.get('https://http-8afc5.firebaseio.com/data.json')
      .map(
        (response: any) => {
          const data = response.json();
          for (const server of data) {
            server.name = 'FETCHED' + server.name;
          }
          return data;
        }
      );
  }
}
