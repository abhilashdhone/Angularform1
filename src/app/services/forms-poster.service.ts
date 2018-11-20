
import { Injectable, Injector } from '@angular/core';
import { Http, Response, Headers, RequestOptions, Request } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from './../modelakainterface/employee.model';
// import { catch } from 'rxjs/operators';

@Injectable()

export class FormsService {
  constructor ( private _http: Http ) {}

  private extractData(res: Response) {
    const bodyq = res.json();
    return bodyq.field || { };
  }

  private handleError(error: any) {
    return Observable.throw(error.statusText);
  }

  postEmploye(employee: Employee): Observable<any> {
    const body = JSON.stringify(employee);
    // headers depends on the api to which we r pushing, they have it explicitly mentioned
    const headers = new Headers({'Content-type': 'application/JSON'});
    const options = new RequestOptions({headers: headers});

    return this._http.post('http://localhost:3100/postemployee', body, options)
    // if a response comes then we should be able to get the response thats why map and catch.
    .pipe(map(this.extractData));
  }
}
