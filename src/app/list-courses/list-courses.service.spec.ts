/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListCoursesService } from './list-courses.service';

describe('Service: ListCourses', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListCoursesService]
    });
  });

  it('should ...', inject([ListCoursesService], (service: ListCoursesService) => {
    expect(service).toBeTruthy();
  }));
});
