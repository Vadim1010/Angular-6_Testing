import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NoContentComponent } from './no-content.component';
import { NoContentRoutes } from './no-content.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(NoContentRoutes),
  ],
  declarations: [NoContentComponent],
  exports: [
    RouterModule
  ]
})
export class NoContentModule { }
