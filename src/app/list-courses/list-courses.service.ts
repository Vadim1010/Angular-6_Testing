import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from './course.model';

@Injectable()
export class ListCoursesService {
  constructor(private http: HttpClient) {}

  getCourses(quantity: number): Observable<Course[]> {
    return this.http.get<Course[]>(`courses?_limit=${quantity}`);
  }

  deleteCourses(id: number): Observable<Course> {
    return this.http.delete<Course>(`courses/${id}`);
  }
}
