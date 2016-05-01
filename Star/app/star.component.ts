import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component(
{
  selector: 'star',
  templateUrl: 'app/star.template.html',
  styles: [`
    .glyphicon-star { color: orange; }
    .glyphicon-star-empty { color: orange; }
  `]
})
export class StarComponent
{
  @Input( "is-favourite" ) isFavourite = false;
  
  @Output() change = new EventEmitter();
  
  onClick()
  {
    this.isFavourite = !this.isFavourite;
    this.change.emit( { newValue: this.isFavourite } );
  }
}