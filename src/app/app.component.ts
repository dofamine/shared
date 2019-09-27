import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CounterService } from "./core/counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('header', { static: false }) header: ElementRef;
  title = 'lecture2';
  greeting: string;
  show: boolean = true;
  state: {value: number};

  constructor(private readonly counterService: CounterService) {
  }

  onClick() {
    this.show = !this.show;
  }

  log(header: HTMLHeadingElement) {
    // header.innerText = 'changed';
    // console.log(this.head.nativeElement);
    // console.log(header);
  }

  ngAfterViewInit(): void {
    // console.log(this.header.nativeElement);
  }

  ngOnInit(): void {
    this.state = this.counterService.state;
  }

  // onCount(operator: string) {
  //   if (operator === '-') {
  //     this.counterService.decrement();
  //   } else {
  //     this.counterService.increment();
  //   }
  //   this.state = this.counterService.state;
  // }
  inc() {
    this.counterService.increment();
  }
}

// class Cylinder {
//   constructor() { }
// }
//
// class Tiers {
//   constructor(){}
// }
//
// class Engine {
//   cylinder;
//
//   constructor(cylinder: Cylinder) {
//     this.cylinder = cylinder;
//   }
// }
//
// class Car {
//   tiers;
//   engine;
//
//   constructor(engine: Engine, tiers: Tiers) {
//     this.tiers = tiers;
//     this.engine = engine;
//   }
// }
//
// const cyl = new Cylinder();
// const eng = new Engine(cyl);
// const tie = new Tiers();
//
// const car = new Car(eng, tie);
