import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styles: []
})
export class InactiveUsersComponent implements OnInit {

  inactiveUsers = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.inactiveUsers = this.usersService.getInactiveUsers();
  }

  setToActive(name: string) {
    this.usersService.updateStatus(name, false);
  }

}
