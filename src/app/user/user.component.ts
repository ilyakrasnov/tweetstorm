import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: string;
  profile_image_url: string;
  profile_banner_url: string;
  follower_count: number;

  constructor(private route: ActivatedRoute, private service: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user = params['user'];

     	this.service.getUser(this.user).subscribe( (user) => {
		  	this.profile_image_url = user.profile_image_url;
		  	this.profile_banner_url = user.profile_banner_url;
  			this.follower_count = + user.followers_count;
	  	});
    });
  }

  userName() {
  	if(this.user[0] === "@") {
  		return this.user.substring(1, this.user.length)
  	}
  	else {
  		return this.user;
  	}
  }

}
