import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ListCoursesService } from './list-courses.service';
import { Course } from './course.model';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss']
})
export class ListCoursesComponent implements OnInit {
  courses: Course[];

  private subscription = new Subscription();
  private quantity = 5;
  constructor(private listCoursesService: ListCoursesService) {}

  ngOnInit() {
    this.getCourses();
  }

  getMoreCourses() {
    this.quantity += 5;
    this.getCourses();
  }

  onEdit(id: number): void {
    console.log(id);
  }

  onSearch(value): void {
    console.log(value);

  }

  onDelete(id: number): void {
    this.subscription.add(
      this.listCoursesService.deleteCourses(id).subscribe(() => {
        this.getCourses();
      })
    );
  }

  private getCourses(): void {
    this.subscription.add(
      this.listCoursesService.getCourses(this.quantity).subscribe(date => {
        this.courses = date;
      })
    );
  }
}
