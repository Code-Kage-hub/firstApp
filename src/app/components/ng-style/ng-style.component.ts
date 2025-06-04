import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-style',
  imports: [NgStyle,FormsModule],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {
  divBgColor:string="green";
  isChecked:boolean = false;
  checked(){
    this.isChecked = !this.isChecked;
  }
  changeBg(color:string){
    this.divBgColor = color;
  }
  mycss:any = {
    'background-color':'red',
    'width':'200px',
    'height':'100px'
  };
}
