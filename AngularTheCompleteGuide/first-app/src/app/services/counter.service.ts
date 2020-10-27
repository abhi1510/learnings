import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counterActiveToInactive = 0;
  counterInactiveToActive = 0;

  constructor() { }

  incrementActiveToInactive() {
    this.counterActiveToInactive += 1;
  }

  incrementInactiveToActive() {
    this.counterInactiveToActive += 1;
  }
}
