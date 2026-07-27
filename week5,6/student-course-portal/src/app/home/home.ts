import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CourseService } from '../services/course';

import { CourseList } from '../course-list/course-list';
import { CourseSummaryWidget } from '../components/course-summary-widget/course-summary-widget';
import { StudentProfile } from '../student-profile/student-profile';
import { Notification } from '../components/notification/notification';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    CourseList,
    CourseSummaryWidget,
    StudentProfile,
    Notification
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

  portalName = 'Student Course Portal';

  isPortalActive = true;

  message = '';

  searchTerm = '';

  availableCourses = 0;

  constructor(
    private courseService: CourseService
  ) {}

  ngOnInit(): void {

    this.courseService.getCourses().subscribe({
  next: (courses) => {
    this.availableCourses = courses.length;
  }
});

    console.log('HomeComponent initialized');

  }

  ngOnDestroy(): void {

    console.log('HomeComponent destroyed');

  }

  onEnrollClick(): void {

    this.message = 'Enrollment opened!';

  }

}