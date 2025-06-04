import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-bindin',
  imports: [FormsModule],
  templateUrl: './data-bindin.component.html',
  styleUrl: './data-bindin.component.css'
})
export class DataBindinComponent {
  firstName:string ="Ram";
  rollNum:number = 121;
  subject:string = "maths";
  isPassed:boolean = true;
  selectedCountry:string ="";
  constructor(){
    this.firstName = "Hua";
    this.rollNum = 203;
  }

  btnClickedMsg(){
    alert("msg clicked welcome anuways😿");
  }
  countryChanged(){
    console.log("Country changed!!!!");
  }
}
