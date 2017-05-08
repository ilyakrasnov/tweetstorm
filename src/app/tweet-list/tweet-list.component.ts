import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../tweets.service';
@Component({
  selector: 'app-tweets',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {
  results: any[] = [];

  constructor(private service: TweetsService) { 
 
    if(this.results.length === 0) {
    	service.getTweets(localStorage.getItem("lastSearch") ||"nba").subscribe( (tweets) => {
    		this.results = tweets.statuses;
    	});
    }
  }

  ngOnInit() {
  }

  search(keyword: string) {
    window.localStorage.setItem("lastSearch", keyword);
  	this.service.getTweets(keyword).subscribe( (tweets) => {

  		this.results = tweets.statuses;
  	});
  }



}
