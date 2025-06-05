import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SignalsComponent {
  firstName = signal("Ram");
  lastName = signal<string>("Sri");
  rollNumb = signal<number>(100);
  courseName:string = "Java Angular";

  constructor(){
    const value = this.firstName();
    setTimeout(()=>{
      this.courseName = "React Js"
      this.lastName.set("Krishna");
    },5000);
  }
  Increment(){
    this.rollNumb.update(val => val+1);
  }

}
