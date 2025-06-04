import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { AdminComponent } from "./admin/admin.component";
import { DataBindinComponent } from "./data-bindin/data-bindin.component";
import { NgIfComponent } from "./ng-if/ng-if.component";

@Component({
  selector: 'app-root',
  imports: [DataBindinComponent, NgIfComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstApp';
}
