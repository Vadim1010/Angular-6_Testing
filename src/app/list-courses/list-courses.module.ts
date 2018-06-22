import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ListCoursesComponent } from './list-courses.component';
import { ListCoursesRoutes } from './list-courses.routing';
import { CourseComponent } from './course';
import { SharedModule } from '../shared';
import { ListCoursesService } from './list-courses.service';
import { SearchComponent } from './search';

@NgModule({
  imports: [CommonModule, ListCoursesRoutes, SharedModule, ReactiveFormsModule],
  declarations: [ListCoursesComponent, CourseComponent, SearchComponent],
  providers: [ListCoursesService]
})
export class ListCoursesModule {}
