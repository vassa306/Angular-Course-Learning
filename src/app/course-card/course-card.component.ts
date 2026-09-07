import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Course } from '../model/course';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  host:{
    '[attr.id]': 'id',
  }
})

export class CourseCardComponent {
  @Input()
  course!: Course;

  @Input({required: true})
  index: number = 1;

  @Input()
  id!: string;

  @Output('courseSelected')
  courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  onCourseViewed() {
    console.log("Course viewed: " + this.course.description);
    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return 'beginner';}
  }
}
