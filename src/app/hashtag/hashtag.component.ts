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
  results: any[] = [];

  constructor(private route: ActivatedRoute, private service: TweetsService) { 
  }

  ngOnInit() {
    console.log("INIT");
	  this.route.params.subscribe(params => {
      console.log(params);
			this.service.getHashtagTweets(params['hashtag']).subscribe( (tweets) => {
        
          this.results = tweets.statuses;
          console.log("hashtags");
          console.log(tweets);
		  	});
	  });

  }

}
