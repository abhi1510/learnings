import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assign6',
  templateUrl: './assign6.component.html',
  styleUrls: ['./assign6.component.css']
})
export class Assign6Component implements OnInit {

  @ViewChild('f') myForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.myForm.value);
  }

}
