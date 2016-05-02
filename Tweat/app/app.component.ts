import {Component} from 'angular2/core';

import {TweetComponent} from './tweet.component';

@Component({
  selector: 'my-app',
  template: '<tweet></tweet>',
  directives: [TweetComponent]
})
export class AppComponent
{
  
}