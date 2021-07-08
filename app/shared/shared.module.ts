import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './pipe/sort.pipe';
import { SearchPipe } from './pipe/search.pipe';
import { CoursesortPipe } from './pipe/coursesort.pipe';
import { CoursesearchPipe } from './pipe/coursesearch.pipe';
import { MycolorDirective } from './directives/mycolor.directive';



@NgModule({
  declarations: [
    SortPipe,
    SearchPipe,
    CoursesortPipe,
    CoursesearchPipe,
    MycolorDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SortPipe,
    SearchPipe,
    CoursesortPipe,
    CoursesearchPipe,
    MycolorDirective
  ]
})
export class SharedModule { }
