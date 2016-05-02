import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component(
{
  selector: 'vote',
  template: `
    <div style='width: 20px;'>
      <i
        class='glyphicon glyphicon-menu-up'
        [class.highlighted]='myVote == 1'
        (click)='onUpVote()'>
      </i>
      <span
        style='font-size: 20px; display: block; text-align: center;'>
          <b>{{ voteCount }}</b>
      </span>
      <i
        class='glyphicon glyphicon-menu-down'
        [class.highlighted]='myVote == -1'
        (click)='onDownVote()'>
      </i>
    </div>`,
  styles: [`
    .glyphicon-menu-up
    {
      font-size: 25px;
      cursor: pointer;
    }
    
    .glyphicon-menu-down
    {
      font-size: 25px;
      cursor: pointer;
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
  
  @Output() upVoteEvent = new EventEmitter();
  @Output() downVoteEvent = new EventEmitter();
  
  private onUpVote()
  {
    this.upVoteEvent.emit( null );
  }
  
  private onDownVote()
  {
    this.downVoteEvent.emit( null );
  }
}