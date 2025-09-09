import { Component, inject, OnInit } from '@angular/core';
import { CourseItemComponent } from '../../shared/components/course-item/course-item.component';
import { ICoursesResponse, StudentsService } from '../services/students.service';


@Component({
    selector: 'student-courses',
    standalone: true,
    templateUrl: 'student-courses.component.html',
    imports: [CourseItemComponent]
})

export class StudentCoursesComponent implements OnInit {
    studentService = inject(StudentsService)

    allCourses?: ICoursesResponse

    ngOnInit() {
        this.studentService.getAllCourses().subscribe((courses) => {
            this.allCourses = courses;
        })
    }
}