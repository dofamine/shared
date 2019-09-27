import {
  AfterContentInit, AfterViewInit,
  Component,
  ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss']
})
export class GreetingsComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, OnDestroy {
  @Input() greeting: string;
  @ContentChild('paragraph', { static: false }) p : ElementRef;
  @ViewChild('input', { static: false }) input: ElementRef;
  text: string;

  constructor() {
    // console.log(this.greeting, 'constructor');
  }

  ngOnInit() {
    // console.log(this.greeting, 'onInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }

  ngDoCheck(): void {
    // console.log('DOCheck');
  }

  ngAfterContentInit(): void {
    // console.log(this.p, 'afterContentInit')
  }

  ngAfterViewInit(): void {
    // console.log(this.input, 'ngAfterViewInit')
  }

  ngOnDestroy() {
    // console.log('destroy');
  }
}
