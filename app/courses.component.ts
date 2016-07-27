import {Component} from 'angular2/core';
import {CourseService} from './course.service'

@Component({
    selector: 'courses',
    template: `
                 <h2>My First Course</h2>
                 {{text}}
                 <ul>
                    <li *ngFor= "#course of courses"> 
                        {{course}}
                    </li>
                 </ul>
              `,
    providers: [CourseService] 
})
export class CoursesComponent { 
    text: string = 'Those are some great courses: ';
    courses;

    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }
}