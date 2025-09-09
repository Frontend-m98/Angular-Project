import { Component, OnInit } from '@angular/core';
import { StudentCoursesComponent } from "./student-courses/student-courses.component";

@Component({
    selector: 'app-students',
    standalone: true,
    template: `<student-courses />`,
    imports: [StudentCoursesComponent]
})

export class StudentsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}