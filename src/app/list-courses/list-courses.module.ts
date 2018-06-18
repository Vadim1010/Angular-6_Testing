import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCoursesComponent } from './list-courses.component';
import { ListCoursesRoutes } from './list-courses.routing';
import { CourseComponent } from './course';
import { SharedModule } from '../shared';


@NgModule({
  imports: [
    CommonModule,
    ListCoursesRoutes,
    SharedModule,
  ],
  declarations: [ListCoursesComponent,
    CourseComponent
]
})
export class ListCoursesModule { }
