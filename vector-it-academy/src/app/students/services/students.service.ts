import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICourse } from '@models/shared/i-course';
import { Observable, of } from 'rxjs';

export interface ICoursesResponse {
    purchased: ICourse[];
    others: ICourse[];
}

const res: ICoursesResponse = {
    purchased: [
        {
            id: '1asdasf',
            name: "Angular Advanced",
            desc: "Lorem ipsum adas desctops my goals trophiyse and alls in the worlds to see again",
            mentorId: "asdasdfsddfgs",
            mentorName: "Umar Sadullayev",
            imgSrc: "https://js.devexpress.com/Content/Images/Frameworks/Angular.png",
            // Details
            tariffs: [],
            links: [],
            lessons: [],
        },
    ],
    others: [
        {
            id: '1asdasf',
            name: "React Advanced",
            desc: "Lorem ipsum adas desctops my goals trophiyse and alls in the worlds to see again",
            mentorId: "3asdasdfsdasdaddfgs",
            mentorName: "Xojakbar Abdulahatov",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s",
            // Details
            tariffs: [],
            links: [],
            lessons: [],
        },
        {
            id: '1asdasf',
            name: "Nodejs Advanced",
            desc: "Lorem ipsum adas desctops my goals trophiyse and alls in the worlds to see again",
            mentorId: "3asdasdfsdasdaddfgs",
            mentorName: "Islom Abdulahatov",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bebC_d4eWwJ-x9ntqDuT94TvOgumSBVWHg&s",
            // Details
            tariffs: [],
            links: [],
            lessons: [],
        },
    ]
}

@Injectable({
    providedIn: 'root'
})
export class StudentsService {
    private httpClient$ = inject(HttpClient);

    getAllCourses(): Observable<ICoursesResponse> {
        return of(res)
        // this.httpClient$.get<ICoursesResponse>(
        //     "api"
        // );
    }
}