import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TweetsService } from '../tweets.service';

@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css']
})
export class HashtagComponent implements OnInit {
  hashtag: string;
  private sub: any;
  results: any[] = [];
  constructor(private route: ActivatedRoute, private service: TweetsService) { 


  }

  ngOnInit() {
	  this.sub = this.route.params.subscribe(params => {
	  console.log(params['hashtag']);
			this.service.getHashtagTweets(params['hashtag']).subscribe( (tweets) => {
		  	console.log(tweets);
		  		this.results = tweets.statuses;
		  	});

	  });

  }

}
