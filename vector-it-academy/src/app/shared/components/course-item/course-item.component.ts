import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ICourse } from '@models/shared/i-course';
import { MatIconModule } from '@angular/material/icon';


@Component({
    selector: 'app-course-item',
    standalone: true,
    templateUrl: 'course-item.component.html',
    imports: [MatButtonModule, MatIconModule],
})

export class CourseItemComponent implements OnInit {
    @Input() item!: ICourse;
    @Input() purchased: boolean = false;

    ngOnInit() { }
}