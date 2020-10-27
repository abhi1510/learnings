import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users = [
    {name: 'User 1', status: true},
    {name: 'User 2', status: true},
    {name: 'User 3', status: false},
    {name: 'User 4', status: false},
  ]

  constructor(private counterService: CounterService) { }

  getActiveUsers() {
    return this.users.filter(x => x.status);
  }

  getInactiveUsers() {
    return this.users.filter(x => !x.status);
  }

  updateStatus(name: string, status: boolean) {
    let user = this.users.find(x => x.name == name);
    if(user) {
      user.status = status;
      if(status) {
        this.counterService.incrementInactiveToActive();
      } else {
        this.counterService.incrementActiveToInactive();
      }
    }
  }

}
