import {Component} from 'angular2/core';
import {HeartComponent} from './heart.component';

@Component({
  selector: 'my-app',
  template: `
    <heart
      [isHearted]="post.isHearted"
      [heartCount]="post.heartCount">
    </heart>`,
  directives: [HeartComponent]
})
export class AppComponent
{
  post =
  {
    isHearted: true,
    heartCount: 10
  }
}