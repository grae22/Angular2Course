import {Component} from 'angular2/core';

@Component({
  selector: 'email-form',
  templateUrl: './app/email-form.component.html'
})
export class EmailFormComponent
{
  frequencies =
  [
    "Daily",
    "Weekly",
    "Monthly"
  ];
}