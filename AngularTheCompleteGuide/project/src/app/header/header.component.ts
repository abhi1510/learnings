import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { features } from 'process';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<string>(); 

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature: string) {
    console.log(feature);
    this.featureSelected.emit(feature);
  }

}
