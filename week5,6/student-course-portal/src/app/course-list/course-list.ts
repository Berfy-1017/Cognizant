import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CourseCard } from '../components/course-card/course-card';
import { CourseService } from '../services/course';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseCard
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  courses: Course[] = [];

  isLoading = true;

  errorMessage = '';

  selectedCourseId: number | null = null;

  searchTerm = '';

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.searchTerm =
      this.route.snapshot.queryParamMap.get('search') || '';

    this.courseService.getCourses().subscribe({

      next: (courses) => {

        this.courses = courses;

      },

      error: (err) => {

        this.errorMessage = err.message;

        this.isLoading = false;

      },

      complete: () => {

        this.isLoading = false;

      }

    });

  }

  searchCourses(): void {

    this.router.navigate(
      ['courses'],
      {
        queryParams: {
          search: this.searchTerm
        }
      }
    );

  }

  onEnroll(courseId: number): void {

    console.log('Enrolling in course:', courseId);

    this.selectedCourseId = courseId;

  }

  trackByCourseId(index: number, course: Course): number {

    return course.id;

  }

}