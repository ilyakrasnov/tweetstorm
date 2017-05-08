import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetsService } from './tweets.service';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TweetComponent } from './tweet/tweet.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { HashtagComponent } from './hashtag/hashtag.component';


const appRoutes: Routes = [
  { path: '', component: TweetListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'mentions/:user', component: UserComponent },
  { path: 'hashtags/:hashtag', component: HashtagComponent},
  { path: '**', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TweetListComponent,
    AboutComponent,
    TweetComponent,
    UserComponent,
    HashtagComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ TweetsService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
