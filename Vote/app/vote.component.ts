import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component(
{
  selector: 'vote',
  template: `
    <div class='vote'>
      <i
        class='glyphicon glyphicon-menu-up vote-button'
        [class.highlighted]='myVote == 1'
        (click)='onUpVote()'>
      </i>
      <span class='vote-count'><b>{{ voteCount }}</b></span>
      <i
        class='glyphicon glyphicon-menu-down vote-button'
        [class.highlighted]='myVote == -1'
        (click)='onDownVote()'>
      </i>
    </div>`,
  styles: [`
    .vote
    {
      width: 20px;
      text-align: center;
      color: #999
    }
    
    .vote-button
    {
      cursor: pointer;
      font-size: 1.4em;
    }
    
    .vote-count
    {
      font-size: 1.2em;
    }
    
    .highlighted
    {
      color: orange;
    }
    `]
})
export class VoteComponent
{
  @Input() voteCount: number;
  @Input() myVote: number;
  
  @Output() voteEvent = new EventEmitter();
  
  private onUpVote()
  {
    if( this.myVote != 1 )
    {
      this.myVote++;
      this.voteEvent.emit( { vote: 1 } );
    }
  }
  
  private onDownVote()
  {
    if( this.myVote != -1 )
    {
      this.myVote--;
      this.voteEvent.emit( { vote: -1 } );
    }
  }
}