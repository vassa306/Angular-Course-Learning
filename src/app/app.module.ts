import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseCardComponent } from './course-card/course-card.component';
import { FormsModule } from '@angular/forms';
import { CourseImageComponent } from "./course-image/course-image.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CourseCardComponent // ← KLÍČOVÁ OPRAVA
    ,
    CourseImageComponent,
    UserProfileComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
