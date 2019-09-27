import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable()
export class CounterService {

  constructor(private readonly ls: LoggerService) {
  }

  private _state: {value :number} = {value: 0};

  get state(): {value :number} {
    return this._state;
  }
  increment() {
    this._state.value++;
    this.ls.log(this._state.value);
  }

  decrement() {
    this._state.value--;
    this.ls.log(this._state.value);
  }
}
