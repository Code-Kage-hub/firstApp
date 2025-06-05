import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signals',
  imports: [],
  templateUrl: './linked-signals.component.html',
  styleUrl: './linked-signals.component.css'
})
export class LinkedSignalsComponent {
  firstName = signal<string>("Krishna");
  lastName = signal<string>("Ram");

  fullNme = linkedSignal({
    source: this.firstName,
    computation: (newValue, oldValue) => {
      const fullNme = newValue + " " + this.lastName();
      return fullNme;
    }
})

  user = signal({id:111,name:"Raju"});

  email = linkedSignal({
    source:this.user,
    computation: user => `${user.name+user.id}@gmail.com`,
    equal:(a:any, b:any)=>a.id !== b.id
  })

  changeFname(){
    this.firstName.set("Mai");     
  }

  changeId(){
    this.user.set({id:123,name:"Arjun"});
  }
}
