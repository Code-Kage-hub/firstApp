import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-stmt',
  imports: [FormsModule],
  templateUrl: './control-stmt.component.html',
  styleUrl: './control-stmt.component.css'
})
export class ControlStmtComponent {
  isVisible:boolean = true;
  isChecked:boolean = false;
  hideShow(val:boolean){
    this.isVisible = val;
  }
}
