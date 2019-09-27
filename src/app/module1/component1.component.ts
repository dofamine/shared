import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';
import { CounterService } from "../core/counter.service";

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss'],
  providers: [CounterService]
})
export class Component1Component implements AfterContentInit, OnInit {
  @ContentChild('paragraph',  {static: false}) p: ElementRef;
  state: { value: number };

  constructor(private readonly counterService: CounterService) {
  }

  ngAfterContentInit(): void {
    console.log(this.p, 'child component');
  }

  inc() {
    this.counterService.increment()
  }

  ngOnInit(): void {
    this.state = this.counterService.state;
  }
}
