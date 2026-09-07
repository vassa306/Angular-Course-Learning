import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-image',
  imports: [],
  templateUrl: './course-image.component.html',
  styleUrl: './course-image.component.css',
})
export class CourseImageComponent implements OnInit  {
  ngOnInit(): void {
  }

  @Input('src')
  imageUrl: string | undefined;

  constructor() {}

  course: Course | undefined;
}
