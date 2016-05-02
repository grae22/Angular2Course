import {Component} from 'angular2/core';
import {VoteComponent} from './vote.component';

@Component({
  selector: 'my-app',
  template: `
    <vote
      [voteCount]='post.voteCount'
      [myVote]='post.myVote'
      (voteEvent)='onVote( $event )'>
    </vote>`,
  directives: [VoteComponent]
})
export class AppComponent
{
  post =
  {
    voteCount: 10,
    myVote: 0
  }
  
  private onVote( $event )
  {
    if( $event.vote == 1 )
    {
      this.post.voteCount++;
    } 
    else if( $event.vote == -1 )
    {
      this.post.voteCount--;
    }
  }
}