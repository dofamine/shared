import { Component, OnInit } from '@angular/core';
import { COMPLEXITY, Lesson } from "./lesson.model";

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  lessons: Lesson[];

  constructor() { }

  ngOnInit() {
    this.lessons = [
        {name: 'intro', complexity: COMPLEXITY.hard, date: new Date('September 23, 2019 18:00:00')},
        {name: 'directives, services, change detection', complexity: COMPLEXITY.medium, date: new Date('September 26, 2019 18:00:00')},
        {name: 'routing', complexity: COMPLEXITY.hard, date: new Date('September 30, 2019 18:00:00')},
      ]
  }
}
