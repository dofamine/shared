import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingsComponent } from './components/greetings/greetings.component';
import { HighlightDirective } from './direcites/highlight.directive';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FormsModule } from "@angular/forms";

const declarations =  [GreetingsComponent, HighlightDirective, ShortenPipe];

@NgModule({
  declarations,
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: declarations
})
export class SharedModule { }
