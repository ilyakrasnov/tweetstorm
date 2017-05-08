import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import _ from 'lodash';
@Injectable()
export class TweetsService {

  constructor(private http: Http) { }

  getTweets(keyword: String) {
    const url = "http://localhost:3000/tweets?keyword=" + keyword;
    return this.http.get(url).map(this.extractData)
      .catch(this.handleError);
  }

  getHashtagTweets(hashtag: String) {
    const url = "http://localhost:3000/tweets?hashtag=" + hashtag;
    return this.http.get(url).map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json();
  }

  private handleError(error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
