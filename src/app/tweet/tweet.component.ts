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
  ngOnInit() { }

  // Parse the tweet into an array of words.  Special words, like
  // hashtags and mentions have a special _type_.
  // Normal words have no type.
  //
  // examples:
  // { value: "Hello" }
  // { type: "mention", value: "@kenmazaika" }
  // { type: "hashtag", value: "#nba" }
  parseTweet() {
    return this.text.split(" ").map( (str) => {
  		if( str[0] === "@" ) {
  			return {
  				type: "mention",
  				value: str
  			};
  		}
  		else if( str[0] === "#" ) {
  			return {
  				type: "hashtag",
  				value: str
  			};
  		}
  		return { value: str };
  	});
  }

  // Removes a colon from the string if it's the last letter of the
  // word.  This fixes the common problem with retweets:
  // RT @kenmazaika: Here's what I think.
  // Where the twitter account should be @kenmazaika, not @kenmazaika:
  stripColon(val: string) {
  	const lastChar = val[val.length - 1];
  	if(lastChar === ":") {
  		return val.substring(0, val.length - 1);
  	}
  	else {
  		return val;
  	}
  }

  // Remove the # from the beginning of a hashtag if it's present.
  stripHashtag(val: string) {
  	if(val[0] === "#") {
  		return val.substring(1, val.length);
  	}
  	else {
  		return val;
  	} 
  }

  // A helper method to show the stripped trailing colon that
  // was removed from the twitter user's name.
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
