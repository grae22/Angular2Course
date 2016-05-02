import {Component, Input} from 'angular2/core';
import {HeartComponent} from './heart.component';

@Component(
{
  selector: 'tweet',
  templateUrl: './app/tweet.template.html',
  directives: [HeartComponent]  
})
export class TweetComponent
{
  @Input() data;
}