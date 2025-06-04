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
   empList: any[] = [
    { empId: 101, name: 'Rajesh Kumar', city: 'Delhi', contact: '+91-9876543210' }, 
    { empId: 102, name: 'Sneha Reddy', city: 'Hyderabad', contact: '+91-9123456780' }, 
    { empId: 103, name: 'Amit Sharma', city: 'Mumbai', contact: '+91-9988776655' }, 
    { empId: 104, name: 'Priya Verma', city: 'Bengaluru', contact: '+91-9090909090' }, 
    { empId: 105, name: 'Manoj Nair', city: 'Kochi', contact: '+91-9876501234' }
  ];
}
