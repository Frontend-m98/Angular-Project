import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.components';
import { StudentsComponent } from './students/students.components';
import { MentorComponent } from './mentor/mentor.components';

export const routes: Routes = [
    { path: 'admin', component: AdminComponent },
    { path: 'students', component: StudentsComponent },
    { path: 'mentor', component: MentorComponent },
];
