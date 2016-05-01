import {Component} from 'angular2/core';
import {CoursesService} from './courses.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component(
{
  selector: 'courses',
  template: `
    <h2>Courses</h2>
    {{ title }}
    <input type="text" autoGrow />
    <ul>
      <li *ngFor="#course of courses">
        {{ course }}
      </li>
    </ul>
  `,
  providers: [CoursesService],
  directives: [AutoGrowDirective]
})
export class CoursesComponent
{
  title = "Title of the courses page";
  courses: string[]
  
  constructor( coursesService: CoursesService )
  {
    this.courses = coursesService.GetCourses();
  }
}