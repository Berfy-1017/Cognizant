import { Routes } from '@angular/router';

import { Home } from './home/home';
import { StudentProfile } from './student-profile/student-profile';

import { CoursesLayout } from './pages/courses-layout/courses-layout';
import { CourseList } from './course-list/course-list';
import { CourseDetail } from './pages/course-detail/course-detail';
import { NotFound } from './pages/not-found/not-found';

import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'courses',
    component: CoursesLayout,
    children: [
      {
        path: '',
        component: CourseList
      },
      {
        path: ':id',
        component: CourseDetail
      }
    ]
  },

  {
    path: 'profile',
    component: StudentProfile,
    canActivate: [authGuard]
  },

  {
    path: 'enroll',
    loadChildren: () =>
      import('./features/enrollment/enrollment-module')
        .then(m => m.EnrollmentModule)
  },

  {
    path: '**',
    component: NotFound
  }

];