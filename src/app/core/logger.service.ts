import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  log(val: number) {
    console.log(`${val} changed`)
  }
}
