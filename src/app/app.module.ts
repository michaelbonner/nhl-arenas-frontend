import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { VisitedPipe } from './visited.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VisitedPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYGe5aS07NFhhITkwac8OQKazamMW3SNU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
