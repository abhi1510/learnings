import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-forms',
  templateUrl: './td-forms.component.html',
  styleUrls: ['./td-forms.component.css']
})
export class TdFormsComponent implements OnInit {

  @ViewChild('f') myForm: NgForm;
  answer: string = '';
  genders: string[] = ['male', 'female'];

  constructor() { }

  ngOnInit(): void {
  }

  suggestUsername() {
    // setting
    // this.myForm.setValue({
    //   username: 'superman',
    //   mail: '',
    //   secret: 'pet',
    //   qa: '',
    //   gender: 'male'
    // })
    // patching
    this.myForm.form.patchValue({
      username: 'superman'
    })
  }

  onSubmit() {
    console.log(this.myForm);

    this.myForm.reset()
  }

}
