import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { HighlightDirective } from './directives/highlight.directive';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatToolbarModule, MatListModule, MatIconModule } from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
