import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component2Component } from './component2.component';
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [Component2Component],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [Component2Component]
})
export class Module2Module { }
