import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-assign5',
  templateUrl: './assign5.component.html',
  styleUrls: ['./assign5.component.css'],
  providers: [UsersService]
})
export class Assign5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
