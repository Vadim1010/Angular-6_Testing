import { Routes, RouterModule } from '@angular/router';

import { ListCoursesComponent } from './list-courses.component';

const routes: Routes = [
  {path: 'home', component: ListCoursesComponent}
];

export const ListCoursesRoutes = RouterModule.forChild(routes);
