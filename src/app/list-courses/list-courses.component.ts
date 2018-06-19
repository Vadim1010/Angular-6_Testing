import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from './course.model';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss']
})
export class ListCoursesComponent implements OnInit {
  courses: Course[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Course[]>('courses').subscribe(data => this.courses = data);
  }

}
