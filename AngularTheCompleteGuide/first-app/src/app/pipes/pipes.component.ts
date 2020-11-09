import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    }, 2000);
  });

  servers = [
    {
      instanceType: 'medium',
      name: 'Production server',
      status: 'stable',
      started: new Date(10, 10, 2020)
    },
    {
      instanceType: 'large',
      name: 'User server',
      status: 'stable',
      started: new Date(10, 10, 2020)
    },
    {
      instanceType: 'small',
      name: 'Development server',
      status: 'offline',
      started: new Date(10, 10, 2020)
    },
    {
      instanceType: 'small',
      name: 'Testing server',
      status: 'critical',
      started: new Date(10, 10, 2020)
    }
  ]

  getStatusClass(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical',  
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
