import {Component, Input} from 'angular2/core';

@Component(
{
  selector: 'heart',
  template: `
    <i
      class="glyphicon glyphicon-heart"
      [class.hearted]="isHearted"
      (click)="onClick()">
    </i> {{ heartCount }}
  `,
  styles: [`
    .glyphicon-heart
    {
      color: #ccc;
      cursor: pointer;
    }
    
    .hearted
    {
      color: deeppink;
    }
  `]
})
export class HeartComponent
{
  @Input() isHearted: boolean;
  @Input() heartCount: number;
  
  onClick()
  {
    this.isHearted = !this.isHearted;
    this.heartCount += ( this.isHearted ? 1 : -1 );
  }
}