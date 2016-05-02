import {Component} from 'angular2/core';
import {TweetService} from './tweet.service';
import {TweetComponent} from './tweet.component';

@Component({
  selector: 'my-app',
  template: `
    <div *ngFor='#tweet of _tweets'>
      <tweet [data]='tweet'></tweet>
    </div>
    `,
  directives: [TweetComponent],
  providers: [TweetService]
})
export class AppComponent
{
  private _tweets;
  
  constructor( tweetService: TweetService )
  {
    this._tweets = tweetService.getTweets();
  }
}