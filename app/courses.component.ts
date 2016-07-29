import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './autogrow.directive';
import {FavStar} from './favstar.directive';

@Component({
    selector: 'courses',
    template: `
                 <h2>My First Course</h2>
                 <input autoGrow />
                 <br>
                 {{text}}
                 <ul>
                    <li *ngFor= "let course of courses"> 
                        {{course}}
                        <i  class="glyphicon glyphicon-star-empty" favstar></i>
                    </li>
                 </ul>
              `,
    providers: [CourseService],
    directives: [AutoGrowDirective, FavStar]  
})
export class CoursesComponent { 
    text: string = 'Those are some great courses: ';
    courses;

    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }

}