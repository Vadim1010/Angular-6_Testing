import { Routes } from '@angular/router';

export const ROUTES: Routes = [
 {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/404',  pathMatch: 'full'}
];
