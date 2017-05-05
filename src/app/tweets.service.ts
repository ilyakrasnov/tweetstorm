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
    const val = this.http.get(url);
    console.log(val);
      return val.map(this.extractData)
      .catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.json();
    console.log("EXTRACTING DATA");
    console.log(body);
    body.statuses.forEach((status) => {
    	const mapped = status.text.split(" ").map((str) => {
		// if(str[0] === "@") {
		// 	return {
		// 		type: "mention",
		// 		value: str
		// 	};
		// }
		// else if(str[0] === "#") {
		// 	return {
		// 		type: "hashtag",
		// 		value: str
		// 	};
		// }
		// return {value: str};
    		// if(str[0] === '@') {
    		// 	return "<a routerLink=\"/mentions/" + str +"\" routerLinkActive=\"active\" href=\"#\">"+str+ "</a>";
    		// }
    		// if(str[0] === '#') {
    		// 	return "<a href='#'>" + str + "</a>";
    		// }
    		return str;
    	});
    	status.text = mapped.join(" ");
    });
    return body;
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
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
