import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TweetsComponent } from './tweets/tweets.component';
import { TweetsService } from './tweets.service';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SubtweetComponent } from './subtweet/subtweet.component';
import { UserComponent } from './user/user.component';



const appRoutes: Routes = [
  { path: '', component: TweetsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'mentions/:user', component: UserComponent },
  { path: '**', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TweetsComponent,
    AboutComponent,
    SubtweetComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ TweetsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
