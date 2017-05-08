import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
    @Input() text: string;
  constructor() { }

  ngOnInit() {
  }

  someMethod() {

	const val = this.text.split(" ").map((str) => {

		if(str[0] === "@") {
			return {
				type: "mention",
				value: str
			};
		}
		else if(str[0] === "#") {
			return {
				type: "hashtag",
				value: str
			};
		}
		return {value: str};
	});

	return val;
  }

  stripColon(val: string) {
  	const lastChar = val[val.length - 1];
  	if(lastChar === ":") {
  		return val.substring(0, val.length - 1);
  	}
  	else {
  		return val;
  	}
  }

  stripHashtag(val) {

  	if(val[0] === "#") {
  		return val.substring(1, val.length);
  	}
  	else {
  		return val;
  	} 
  }

  trailingColon(val: string) {
	const lastChar = val[val.length - 1];
  	if(lastChar === ":") {
  		return ":";
  	}
  	else {
  		return "";
  	}
  }

}