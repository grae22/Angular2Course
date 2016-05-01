import {Component} from 'angular2/core';
import {StarComponent} from './star.component';

@Component({
    selector: 'my-app',
    template: '<star></star>',
    directives: [StarComponent]
})
export class AppComponent { }