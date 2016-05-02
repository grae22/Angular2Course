import {Component} from 'angular2/core';
import {HeartComponent} from './heart.component';

@Component(
{
  selector: 'tweet',
  templateUrl: './app/tweet.template.html',
  directives: [HeartComponent]
})
export class TweetComponent
{
  private _name = "Name";
  private _nick = "@nick";
  private _content = "This is content...";
  
  /*
  constructor(
    private _name: string,
    private _nick: string,
    private _content: string )
  {
    
  }*/
}