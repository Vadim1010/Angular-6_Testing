import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Course } from '../course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  @Input() course: Course;

  @Output() handlerDelete = new EventEmitter<number>();
  @Output() handlerEdit = new EventEmitter<number>();
  constructor() {}

  onDelete(id: number): void {
    this.handlerDelete.emit(id);
  }

  onEdit(id: number): void {
    this.handlerEdit.emit(id);
  }

}
