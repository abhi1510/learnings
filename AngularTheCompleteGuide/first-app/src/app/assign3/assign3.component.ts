import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign3',
  templateUrl: './assign3.component.html',
  styles: ['.white-text {color: white}']
})
export class Assign3Component implements OnInit {

  showDetails: boolean = false;
  clickLogs = [];

  constructor() { }

  ngOnInit(): void {}

  onToggle() {
    this.clickLogs.push(new Date());
    this.showDetails = ! this.showDetails;
  }

  getBgColor(index: number) {
    return index >= 4 ? 'blue' : 'transparent';
  }

}
