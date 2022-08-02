import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name="kedhar reddy"
  isValidUser=true;
  departments=["CSE","IT","CIVIL","MECH","EEE"]

  
  onClick(){
    alert("Form submitted");
     
  }
}
