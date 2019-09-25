import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [Component1Component],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [Component1Component]
})
export class Module1Module { }
