import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routing';
import { NoContentModule } from './no-content';
import { LoginModule } from './login';
import { ListCoursesModule } from './list-courses';
import { CoreModule } from './core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    NoContentModule,
    ListCoursesModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
