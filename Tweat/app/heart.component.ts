import {Component, Input} from 'angular2/core';

@Component(
{
  selector: 'heart',
  template: `
    <i
      class="glyphicon glyphicon-heart"
      [class.hearted]="isHearted"
      (click)="onClick()">
    </i>
    <span class='heart-count'>{{ heartCount }}</span>
  `,
  styles: [`
    .glyphicon-heart
    {
      color: #ccc;
      cursor: pointer;
      font-size: 1.1em;
    }
    
    .hearted
    {
      color: deeppink;
    }
    
    .heart-count
    {
      font-size: 1.3em;
    }
  `]
})
export class HeartComponent
{
  @Input() isHearted = false;
  @Input() heartCount = 0;
  
  onClick()
  {
    this.isHearted = !this.isHearted;
    this.heartCount += ( this.isHearted ? 1 : -1 );
  }
}