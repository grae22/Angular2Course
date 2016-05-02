import {Component} from 'angular2/core';

@Component(
{
  selector: 'zippy',
  template: `
    <div class='zippy'>
      <ng-content></ng-content>
    </div>
    `,
   styles: [`
    .zippy
    {
      width: 60%;
      border-style: groove;
      border-width: 2px;
    }
    `]
})
export class ZippyComponent
{
  
}