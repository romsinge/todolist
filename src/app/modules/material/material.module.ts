import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatListModule, MatIconModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialModule { }
