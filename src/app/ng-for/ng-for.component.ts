import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  cityList:string[] = ["Bezawada","Vizag","Hyderabad","Chirala","Chennai","Bangalore","Tokyo"];
  sno:number = 0;
  empList: any[] = [
    { empId: 101, name: 'Rajesh Kumar', city: 'Delhi', contact: '+91-9876543210' }, 
    { empId: 102, name: 'Sneha Reddy', city: 'Hyderabad', contact: '+91-9123456780' }, 
    { empId: 103, name: 'Amit Sharma', city: 'Mumbai', contact: '+91-9988776655' }, 
    { empId: 104, name: 'Priya Verma', city: 'Bengaluru', contact: '+91-9090909090' }, 
    { empId: 105, name: 'Manoj Nair', city: 'Kochi', contact: '+91-9876501234' }
  ];

}
