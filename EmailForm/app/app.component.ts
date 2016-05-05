import {Component} from 'angular2/core';
import {EmailFormComponent} from './email-form.component';

@Component({
  selector: 'my-app',
  directives: [EmailFormComponent],
  template: '<email-form></email-form>'
})
export class AppComponent
{

}