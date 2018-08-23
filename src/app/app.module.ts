import { MaterialModule } from './modules/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { HighlightDirective } from './directives/highlight.directive';
import { StatusPipe } from './pipes/status.pipe';
import { TaskFilterPipe } from './pipes/task-filter.pipe';
import { TasksComponent } from './components/tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    HighlightDirective,
    StatusPipe,
    TaskFilterPipe,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule
  ],
  providers: [TaskFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
