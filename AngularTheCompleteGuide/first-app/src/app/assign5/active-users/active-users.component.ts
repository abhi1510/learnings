import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styles: []
})
export class ActiveUsersComponent implements OnInit {

  activeUsers = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.activeUsers  = this.usersService.getActiveUsers();
  }

  setToInactive(name: string) {
    this.usersService.updateStatus(name, false);
  }

}
