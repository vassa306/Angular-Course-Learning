import { Component, ContentChild, EventEmitter, Input, Output, output, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Course } from '../model/course';
import {CommonModule} from '@angular/common';
import { CourseImageComponent } from '../course-image/course-image.component';

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

export class CourseCardComponent implements OnInit, AfterViewInit {
  @Input()
  course!: Course;

  @Input({required: true})
  index: number = 1;

  @Input()
  id!: string;

  @Output('courseSelected')
  courseSelected = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent, {read: ElementRef})
  image!: CourseImageComponent;

  constructor() { }
  ngAfterViewInit(): void {
    if (this.image) {
      console.log('Course image content initialized:', this.image);
    }
  }

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
