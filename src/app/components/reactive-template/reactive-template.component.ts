import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-template',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-template.component.html',
  styleUrl: './reactive-template.component.css'
})
export class ReactiveTemplateComponent {
  userForm:FormGroup = new FormGroup({
    fname:new FormControl("",[Validators.required]),
    lname:new FormControl("",[Validators.required,Validators.minLength(5)]),
    userName:new FormControl(""),
    city:new FormControl(""),
    state:new FormControl("Andhra Pradesh"),
    zip:new FormControl(""),
    isAgree:new FormControl(false)
  });

  constructor(){
    this.userForm.controls['state'].disable();
    setTimeout(()=>{
      this.userForm.controls['state'].enable()
    },5000);
  }

  onSave(){
    debugger
    const isValid = this.userForm.valid;
    const form = this.userForm.value;
    debugger
  }
}
