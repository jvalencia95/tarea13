import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reto1Component } from './reto1/reto1.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Reto2Component } from './reto2/reto2.component';



@NgModule({
  declarations: [
    Reto1Component,
    Reto2Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    Reto1Component,
    Reto2Component
  ]
})
export class RetosModule { }
