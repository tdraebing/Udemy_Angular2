import {Component} from 'angular2/core';

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
              `
})
export class CoursesComponent { 
    text: string = 'Those are some great courses: '
    courses: string[] = ['Introduction into Angular2', 'Ionic2 from Scratch', 'Object Oriented Programming'] 
}