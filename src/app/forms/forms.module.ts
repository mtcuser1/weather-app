import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    FormsComponent
  ]
})
export class FormsModule { }
