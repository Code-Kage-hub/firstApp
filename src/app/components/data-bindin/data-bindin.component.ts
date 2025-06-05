import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private router:Router){
    this.firstName = "Hua";
    this.rollNum = 203;
  }

  navAdmin(){
    this.router.navigateByUrl("/admin")
  }

  btnClickedMsg(){
    alert("msg clicked welcome anuways😿");
  }
  countryChanged(){
    console.log("Country changed!!!!");
  }
}
