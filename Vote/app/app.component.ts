import {Component} from 'angular2/core';
import {VoteComponent} from './vote.component';

@Component({
  selector: 'my-app',
  template: `
    <vote
      [voteCount]='post.voteCount'
      [myVote]='post.myVote'
      (upVoteEvent)='onUpVote( $event )'
      (downVoteEvent)='onDownVote( $event )'>
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
  
  private onUpVote()
  {
    if( this.post.myVote == 0 )
    {
      this.post.myVote = 1;
      this.post.voteCount++;
    }
    else if( this.post.myVote == -1 )
    {
      this.post.myVote = 0;
      this.post.voteCount++;
    }
  }

  private onDownVote()
  {
    if( this.post.myVote == 0 )
    {
      this.post.myVote = -1;
      this.post.voteCount--;
    }
    else if( this.post.myVote == 1 )
    {
      this.post.myVote = 0;
      this.post.voteCount--;
    }
  }
}