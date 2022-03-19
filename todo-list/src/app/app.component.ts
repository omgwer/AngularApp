import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = "Alexandr";
  showName: boolean = true;
  animals:Array<string> = ["Cat", "Dog", "Turtle"];
  applesNumber:number = 10;
  tasks: Array<string> = [
    "GoToShop",
    "GoToCinema",
    "GoToSchool"
  ];

  addTask(myForm : NgForm) {
    this.tasks.push(myForm.value.task);
  }
  
  addApple():void {
      this.applesNumber++;
  }

  onDelete(text: string): void {
    this.tasks = this.tasks.filter(task => task != text);
  }
}
