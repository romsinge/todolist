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
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { RouterModule } from '@angular/router';
import ROUTES from './app.routes';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    HighlightDirective,
    StatusPipe,
    TaskFilterPipe,
    TasksComponent,
    TaskCreateComponent,
    TaskDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [TaskFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
