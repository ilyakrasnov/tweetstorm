import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-subtweet',
  templateUrl: './subtweet.component.html',
  styleUrls: ['./subtweet.component.css']
})
export class SubtweetComponent implements OnInit {
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
	})
	return val;
  }

}
