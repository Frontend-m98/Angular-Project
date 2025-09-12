import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.components';
import { StudentsComponent } from './students/students.components';
import { MentorComponent } from './mentor/mentor.components';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
    { path: 'admin', component: AdminComponent },
    { path: 'students', component: StudentsComponent },
    { path: 'mentor', component: MentorComponent },
    { path: "not-found", component: NotFoundComponent },
    { path: "**", redirectTo: 'not-found'},
];
