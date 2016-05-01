import {Component} from 'angular2/core';
import {StarComponent} from './star.component';

@Component({
  selector: 'my-app',
  template: '<star [is-favourite]="post.isFavourite" (change)="onFavouriteChange( $event )"></star>',
  directives: [StarComponent]
})
export class AppComponent
{
  post =
  {
    title: "Title",
    isFavourite: true
  }
  
  onFavouriteChange( $event )
  {
    console.log( $event );
  }
}