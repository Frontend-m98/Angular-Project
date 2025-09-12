import { Routes } from '@angular/router';

import { MentorComponent } from './mentor/mentor.components';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
    { path: 'admin', loadComponent: () => import('./admin/admin.components') },
    // & boshqa component dan chaqirish pathlar uzun bo'lib ketishini oldini olish uchun usuldir
    { path: 'students', loadChildren: () => import('./students/students.routs') },
    { path: 'mentor', component: MentorComponent },
    { path: "not-found", component: NotFoundComponent },
    { path: "**", redirectTo: 'not-found' },
];
