import {Component, Input} from 'angular2/core';

@Component(
{
  selector: 'zippy',
  template: `
    <div
      class='zippy'
      (click)='onClick()'>
      <b>{{ title }}</b>
      <i
        class='pull-right glyphicon'
        [ngClass]="
          {
            'glyphicon-chevron-up': isExpanded,
            'glyphicon-chevron-down': !isExpanded
          }">
      </i>
      <div *ngIf='isExpanded'>
        <ng-content></ng-content>
      </div>
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
  @Input() title = "";
  
  private isExpanded = false;
 
  private onClick()
  {
    this.isExpanded = !this.isExpanded;
  }
}