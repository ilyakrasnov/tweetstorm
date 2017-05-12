import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../tweets.service';
@Component({
  selector: 'app-tweets',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {
  results: any[] = [];
  query: string;

  constructor(private service: TweetsService) { }

  // Logic for loading the initial state of the component should
  // exist in ngOnInit. It works if you put it in the constructor,
  // but the constructor should be used to setup Dependency Injection
  // and not much else.
  // http://stackoverflow.com/questions/35763730/difference-between-constructor-and-ngoninit
  ngOnInit() {
    if(this.results.length === 0) {
      this.query = localStorage.getItem("lastSearch") || "nba";

      this.service.getTweets(this.query).subscribe( (tweets) => {
        this.results = tweets.statuses;
      });
    }

    setInterval(() => {
        this.search(this.query);
    }, 3000);
  }

  search(keyword: string) {
    window.localStorage.setItem("lastSearch", keyword);
    this.query = keyword;
  	this.service.getTweets(keyword).subscribe( (tweets) => {
  		this.results = tweets.statuses;
  	});
  }

}
