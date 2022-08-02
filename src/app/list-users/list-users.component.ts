import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //users!:any;
  users=[
    {name:"kedhar reddy",email:"kedharreddy21@gmail.com"},
    {name:"kedhar reddy",email:"kedharreddy21@gmail.com"}
  
  ];
  deleteuser(){
    alert("Sucsessfully deleted");
  }
}
