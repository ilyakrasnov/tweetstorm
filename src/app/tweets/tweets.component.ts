import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../tweets.service';
@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  results: any[] = [];
  constructor(private service: TweetsService) { 
  	service.getTweets().subscribe( (tweets) => {
  	console.log(tweets.statuses);
  		this.results = tweets.statuses;
  	});
  }

  ngOnInit() {
  }

}