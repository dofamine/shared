import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss']
})
export class GreetingsComponent implements OnInit {
  @Input() greeting: string;

  constructor() { }

  ngOnInit() {
  }
}
