import {Component} from 'angular2/core';

@Component(
{
  selector: 'star',
  template: `
    <i
      class="glyphicon"
      [class.glyphicon-star]="isFavourite"
      [class.glyphicon-star-empty]="!isFavourite"
      (click)="onClick()">
    </i>
  `
})
export class StarComponent
{
  isFavourite = false;
  
  onClick()
  {
    this.isFavourite = !this.isFavourite;
  }
}