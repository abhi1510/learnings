import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverName: string = '';
  serverCreationStatus: string = 'No server was created!';

  constructor() { }

  ngOnInit(): void {
  }

  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    this.serverCreationStatus = 'Server was created!'
  }

}
